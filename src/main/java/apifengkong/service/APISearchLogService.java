package apifengkong.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import apifengkong.entity.APISearchLogRepository;
@Service
public class APISearchLogService {
	
	@Autowired
	APISearchLogRepository apiSearchLogRepository;
	
//	public Map<String,String> getApiSearchCountByCustomer() {
//		//创建一个stringBuffer 临时存放map.key
//		StringBuffer key=new StringBuffer();
//		//创建map对象
//		Map<String, String> map=new HashMap<String,String>();
//		List<String[]> apiSearchCount=apiSearchLogRepository.getApiSearchCountByCustomer();
//		
//		for (int i = 0; i < apiSearchCount.size(); i++) {
//			//获取list中的string数组元素
//			String[]  element=apiSearchCount.get(i);
//			//数组的第二位，第三位，第四位拼接成key
//			key.append(element[1]).append(element[2]).append(element[3]);
//			//数组的第一位拼接成value，初始化map
//			map.put(key.toString(), element[0]);
//			//临时的stringBuffer清空内容以便下次循环继续使用
//			key.delete(0, key.length());
//		}
//		return map;
//		
//	}
   
   //将string[]里的值都转换为string类型
//	public List<String[]> Object2String() {
//		List<String[]> searchList=new ArrayList<String[]>();
//		for (int i = 0; i < searchList.size(); i++) {
//			String str=new String();
//			str.valueOf(searchList);
//		}
//		return searchList;
//		
//	}
//   public void  IfTrue(Integer customerId) {
//	//List<?> apiSearchCountByCustomer = apiSearchLogRepository.getApiSearchCountByCustomer(customerId);
//	if (condition) {
//		
//	}
//}
}

