package apifengkong.util;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Callable;

import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import apifengkong.entity.SupplyAPI;

public class AliyunCallable implements Callable<Map> {

	private SupplyAPI supplyAPI;
	private HashMap<String, String> parameters;

	public AliyunCallable(SupplyAPI supplyAPI, HashMap<String, String> parameters) {
		super();
		this.supplyAPI = supplyAPI;
		this.parameters = parameters;
	}

	@Override
	public Map call() {
		String host = supplyAPI.getHost();
		String path = supplyAPI.getPath();
		String method = supplyAPI.getMethod().toString();
		String appcode = supplyAPI.getSupplier().getAppCode();
		Map<String, String> headers = new HashMap<String, String>();
		// 最后在header中的格式(中间是英文空格)为Authorization:APPCODE
		// 83359fd73fe94948385f570e3c139105
		headers.put("Authorization", "APPCODE " + appcode);
		String bodys = "";
		if ("POST".equalsIgnoreCase(method)) {
			try {
				HttpResponse response = null;
				if ("/rest/161225/zmxy/api/zhima.credit.antifraud.verify.json".equalsIgnoreCase(path)) {
					headers.put("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
					Map<String, String> querys = new HashMap<String, String>();
					response = HttpUtils.doPost(host, path, method, headers, querys, parameters);
				} else {
					headers.put("Content-Type", "application/json; charset=UTF-8");
					response = HttpUtils.doPost(host, path, method, headers, parameters, bodys);
				}

				ObjectMapper mapper = new ObjectMapper();
				Map bean = mapper.readValue(EntityUtils.toString(response.getEntity(), Charset.forName("utf-8")),
						Map.class);

				return bean;

			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		} else {
			try {

				HttpResponse response = HttpUtils.doGet(host, path, method, headers, parameters);
				// return response.toString();
				// 获取response的body

				ObjectMapper mapper = new ObjectMapper();
				Map bean = mapper.readValue(EntityUtils.toString(response.getEntity(), Charset.forName("utf-8")),
						Map.class);

				return bean;
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
	}

}
