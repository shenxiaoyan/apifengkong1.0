package apifengkong.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.annotation.PostConstruct;
import javax.security.auth.login.FailedLoginException;
import javax.transaction.Transactional;

import org.apache.http.HttpStatus;
import org.jboss.logging.Logger;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.Cache.ValueWrapper;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.moxie.api.DefaultMoxieClient;
import com.moxie.api.MoxieClient;
import com.moxie.api.MoxieRequest;
import com.moxie.api.MoxieResponse;
import com.moxie.api.domain.Authorization;
import com.moxie.api.domain.MoxieApiException;
import com.moxie.api.http.HttpClient;
import com.moxie.api.http.HttpClientConfig;
import com.moxie.api.http.HttpMethod;

import apifengkong.controller.PersonCreditController.PersonPasswordReset;
import apifengkong.entity.Customer;
import apifengkong.entity.PersonCreditOverview;
import apifengkong.entity.PersonCreditOverviewRepository;
import apifengkong.entity.PersonCreditSubmit;
import apifengkong.entity.PersonCreditSubmitRepository;
import apifengkong.entity.SupplyAPI;
import apifengkong.entity.SupplyAPIRepository;
import apifengkong.util.BackgroundCellphoneLogAnalysis;
import apifengkong.util.Common;
import apifengkong.util.Common.VerifyCodeMessage;
import apifengkong.util.FailResponse;
import apifengkong.util.JsonTools;

@Service
public class PersonCreditSearchService {

	private static Logger logger = Logger.getLogger(PersonCreditSearchService.class);

	private static HttpClient httpClient;

	private static Authorization authorization;

	private ExecutorService executor;

	@Autowired
	private CacheManager cacheManager;

	@Autowired
	PersonCreditSubmitRepository personCreditSubmitRepository;

	@Autowired
	SupplyAPIRepository supplyAPIRepository;

	@Autowired
	BaseSearchService baseSearchService;

	@Autowired
	PersonCreditOverviewRepository personCreditOverviewRepository;

	@Value("${mojie.api.key}")
	private String apiKey;
	@Value("${mojie.api.token}")
	private String token;

	@PostConstruct
	public void initHttpClient() {
		HttpClientConfig httpClientConfig = HttpClientConfig.custom().setMaxTotal(100).setDefaultMaxPerRoute(2)
				.setConnectTimeout(30 * 100).setConnectionRequestTimeout(30 * 100).setSocketTimeout(30 * 100).build();
		httpClient = new HttpClient(httpClientConfig.getRequestConfig(), httpClientConfig.getPool());

		authorization = Authorization.AuthorizationBuilder.newBuilder().withApiKey(apiKey).withToken(token).build();

		this.executor = Executors.newCachedThreadPool();
		logger.info("运营商查询线程池启动");
	}

	@Transactional
	public void personCreditSearch(PersonCreditSubmit personCreditSubmit, Customer customer) {
		PersonCreditSubmit savePerson = personCreditSubmitRepository.save(personCreditSubmit);

		PersonCreditOverview personCreditOverview = new PersonCreditOverview();
		personCreditOverview.setPerson(savePerson);
		personCreditOverview.setStatus("处理中");
		PersonCreditOverview saved = personCreditOverviewRepository.save(personCreditOverview);
		Integer id = saved.getId();
		analyseCellphoneLog(savePerson, customer, id);

		analyseIdCard(savePerson, customer, id);
		analyseCellphone(savePerson, customer, id);
		analyseDishonestBlacklist(savePerson, customer, id);
//		analyseAntifraud(savePerson, customer, id);
		analyseAntifraudTest(savePerson, customer, id);
		analyseCriminal(savePerson, customer, id);
		analyseMultipleHeadLend(savePerson, customer, id);
		analyseZhimaScore(savePerson, customer, id);

		

	}

	public void analyseIdCard(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		String idCard = savePerson.getIdCard();
		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8034);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("idcard", idCard);
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (Integer.valueOf(map.get("status").toString()).equals(0)) {
					res.setColor(Color.primary);
					res.setMsg(map.get("msg").toString());
					res.setStatus(0);
					res.setResult(map.get("result"));
					logger.info("正常内容" + res);
					personCreditOverview.setArea(((HashMap) map.get("result")).get("area").toString());
					personCreditOverview.setSex(((HashMap) map.get("result")).get("sex").toString());
					personCreditOverview.setBirth(((HashMap) map.get("result")).get("birth").toString());
					SimpleDateFormat dateformat = new SimpleDateFormat("yyyy年MM月dd日");
					try {
						Date parse = dateformat.parse(((HashMap) map.get("result")).get("birth").toString());
						int year1 = new Date().getYear();
						int year2 = parse.getYear();
						int age = year1 - year2;
						personCreditOverview.setAge(age);
					} catch (ParseException e) {
						e.printStackTrace();
					}
				} else {
					res.setColor(Color.danger);
					res.setMsg(map.get("msg").toString());
					res.setStatus(Integer.valueOf(map.get("status").toString()));
					logger.info("错误内容" + res);
				}
			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseIdCard(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);

	}

	public void analyseCellphone(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		String mobile = savePerson.getMobile();
		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8001);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("mobile", mobile);
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (Integer.valueOf(map.get("error_code").toString()).equals(0)) {
					res.setColor(Color.primary);
					res.setStatus(0);
					res.setMsg("ok");
					res.setResult(map.get("result"));
					logger.info("正常内容" + res);
					String mobileCompany = ((HashMap) map.get("result")).get("city").toString()
							+ ((HashMap) map.get("result")).get("company").toString().substring(2);
					personCreditOverview.setMobileCompany(mobileCompany);

				} else {
					res.setColor(Color.danger);
					res.setMsg(map.get("reason").toString());
					res.setStatus(Integer.valueOf(map.get("error_code").toString()));
					logger.info("错误内容" + res);
				}

			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseCellphone(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseAntifraudTest(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		Response res = new Response();
		Map<String, Object> map = new HashMap<String, Object>();
		ArrayList<String> arrayList = new ArrayList<String>();
		arrayList.add("V_AD_CN_UK");
		arrayList.add("V_BC_CN_UK");
		arrayList.add("V_PH_CN_MA_UM180D");
		arrayList.add("V_BC_PH_MA_UM360D");
		arrayList.add("V_AD_CN_MA_UL360D");
		arrayList.add("V_CN_NM_UM");
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("bizNo", "ZM201701173000000484800001277857");
		hashMap.put("verifyCode", arrayList);

		map.put("success", true);
		map.put("code", null);
		map.put("message", null);
		map.put("data", hashMap);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (Boolean.valueOf(map.get("success").toString()).equals(true)) {
			res.setStatus(0);
			res.setMsg("测试数据");
			res.setResult(map.get("data"));
			logger.info("正常内容" + res);
			List<String> verifyCode = (ArrayList<String>) (((HashMap) map.get("data")).get("verifyCode"));
			List<VerifyCodeMessage> verifyTrans = Common.verifyTrans(verifyCode);

			res.setColor(Color.success);
			for (VerifyCodeMessage verifyCodeMessage : verifyTrans) {
				if (verifyCodeMessage.getColor().equals(Color.warning) && !res.getColor().equals(Color.danger)) {
					res.setColor(Color.warning);
				} else if (verifyCodeMessage.getColor().equals(Color.danger)) {
					res.setColor(Color.danger);
				}
			}
			res.setDescription(verifyTrans);
		} else {
			res.setColor(Color.danger);
			res.setMsg(map.get("message").toString());
			res.setStatus(500);
			logger.info("错误内容" + res);
		}

		personCreditOverview.setAnalyseAntifraud(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseAntifraud(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		String mobile = savePerson.getMobile();
		String address = savePerson.getCommonAddress();
		String name = savePerson.getName();
		String bankCard = savePerson.getBankCard();
		String certNo = savePerson.getIdCard();
		String certType = "IDENTITY_CARD";

		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8035);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("mobile", mobile);
		hashMap.put("address", address);
		hashMap.put("name", name);
		hashMap.put("bankCard", bankCard);
		hashMap.put("certNo", certNo);
		hashMap.put("certType", certType);
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (Boolean.valueOf(map.get("success").toString()).equals(true)) {
					res.setStatus(0);
					res.setMsg("ok");
					res.setResult(map.get("data"));
					logger.info("正常内容" + res);
					List<String> verifyCode = (ArrayList<String>) (((HashMap) map.get("data")).get("verifyCode"));
					List<VerifyCodeMessage> verifyTrans = Common.verifyTrans(verifyCode);

					res.setColor(Color.success);
					for (VerifyCodeMessage verifyCodeMessage : verifyTrans) {
						if (verifyCodeMessage.getColor().equals(Color.warning) && !res.getColor().equals(Color.danger)) {
							res.setColor(Color.warning);
						} else if (verifyCodeMessage.getColor().equals(Color.danger)) {
							res.setColor(Color.danger);
						}
					}
					res.setDescription(verifyTrans);
				} else {
					res.setColor(Color.danger);
					res.setMsg(map.get("message").toString());
					res.setStatus(500);
					logger.info("错误内容" + res);
				}

			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseAntifraud(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseDishonestBlacklist(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8028);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("name", savePerson.getName());
		hashMap.put("cardno", savePerson.getIdCard());
		hashMap.put("type", "person");
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (Integer.valueOf(map.get("code").toString()).equals(1)) {
					res.setColor(Color.success);
					res.setStatus(0);
					res.setMsg(map.get("msg").toString());
					res.setResult(map.get("data"));
					logger.info("正常内容" + res);

				} else if (Integer.valueOf(map.get("code").toString()).equals(0)) {
					res.setColor(Color.danger);
					res.setMsg(map.get("msg").toString());
					res.setStatus(0);
					res.setResult(map.get("data"));
					logger.info("错误内容" + res);
				}

			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseDishonestBlacklist(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseCriminal(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8022);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("name", savePerson.getName());
		hashMap.put("idcard", savePerson.getIdCard());
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (map.get("resCode").toString().equals("0000")) {
					res.setStatus(0);
					res.setMsg(((HashMap) map.get("data")).get("statusMsg").toString());
					if (((HashMap) map.get("data")).get("statusCode").toString().equals("2012")) {
						res.setColor(Color.danger);
					} else {
						res.setColor(Color.success);
					}
					res.setResult(map.get("data"));
					logger.info("正常内容" + res);

				} else {
					res.setColor(Color.info);
					res.setMsg(map.get("resMsg").toString());
					res.setStatus(300);
					logger.info("错误内容" + res);
				}

			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseCriminal(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseMultipleHeadLend(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		Response res = new Response();
		HashMap<SupplyAPI, HashMap<String, String>> api = new HashMap<>();
		SupplyAPI supplyApi = supplyAPIRepository.findOne(8006);
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("cycle", "12");
		hashMap.put("cellphone", savePerson.getMobile());
		api.put(supplyApi, hashMap);

		Map<String, Map> results = baseSearchService.search(api, customer);
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		if (!results.isEmpty()) {
			Collection<Map> values = results.values();
			for (Map map : values) {
				if (map.get("resCode").toString().equals("0000")) {
					res.setStatus(0);
					res.setMsg(((HashMap) map.get("data")).get("statusMsg").toString());
					if (((HashMap) map.get("data")).get("statusCode").toString().equals("2012")) {
						if (((HashMap) ((HashMap) map.get("data")).get("result")).get("code").toString()
								.equals("200")) {
							res.setColor(Color.success);
							HashMap<String, Integer> description = new HashMap<String, Integer>();

							HashMap s002 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S002");
							HashMap s004 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S004");
							HashMap s007 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S007");
							HashMap s009 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S009");
							HashMap s012 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S012");
							HashMap s013 = (HashMap) ((HashMap) ((HashMap) ((HashMap) map.get("data")).get("result"))
									.get("data")).get("S013");

							int bankRegisterCount = 0;
							int webRegisterCount = 0;
							int webApplyMin = 0;
							int webApplyMax = 0;
							int webLendMin = 0;
							int webLendMax = 0;
							int webOverdueCount = 0;
							int webOverdueMin = 0;
							int webOverdueMax = 0;

							HashSet<String> webApplySet = new HashSet<String>();
							HashSet<String> webLendSet = new HashSet<String>();
							HashSet<String> webOverdueSet = new HashSet<String>();

							List l_s002 = (ArrayList) s002.get("data");
							List l_s004 = (ArrayList) s004.get("data");
							List l_s007 = (ArrayList) s007.get("data");
							List l_s009 = (ArrayList) s009.get("data");
							List l_s012 = (ArrayList) s012.get("data");
							List l_s013 = (ArrayList) s013.get("data");

							if (!l_s002.isEmpty()) {
								for (Object object : l_s002) {
									HashMap row = (HashMap) object;
									if (row.get("platformType").toString().equals("2")) {
										webRegisterCount++;
									} else if (row.get("platformType").toString().equals("1")) {
										bankRegisterCount++;
									}
								}
							}
							if (!l_s004.isEmpty()) {

								for (Object object : l_s004) {
									HashMap row = (HashMap) object;
									if (row.get("platformType").toString().equals("2")) {
										webApplySet.add(row.get("platformCode").toString());
										webApplyMin += Common.youfenMoneyMin(row.get("applicationAmount").toString());
										webApplyMax += Common.youfenMoneyMax(row.get("applicationAmount").toString());
									}
								}
							}

							if (!l_s007.isEmpty()) {
								for (Object object : l_s007) {
									HashMap row = (HashMap) object;
									if (row.get("platformType").toString().equals("2")) {
										webLendSet.add(row.get("platformCode").toString());
										webLendMin += Common.youfenMoneyMin(row.get("loanLendersAmount").toString());
										webLendMax += Common.youfenMoneyMax(row.get("loanLendersAmount").toString());
									}
								}
							}
							if (!l_s012.isEmpty()) {
								for (Object object : l_s012) {
									HashMap row = (HashMap) object;
									webOverdueCount += Integer.valueOf(row.get("counts").toString());
									webOverdueSet.add(row.get("platformCode").toString());
									webOverdueMin += Common.youfenMoneyMin(row.get("money").toString());
									webOverdueMax += Common.youfenMoneyMax(row.get("money").toString());

								}
							}
							if (webApplySet.size() > 7 || webLendSet.size() > 3) {
								res.setColor(Color.warning);
							}
							if (webOverdueCount > 0) {
								res.setColor(Color.warning);
							}
							if (webLendMin > 50) {
								res.setColor(Color.danger);
							}

							description.put("银行注册次数", bankRegisterCount);
							description.put("网贷平台注册次数", webRegisterCount);

							description.put("在多少网贷平台申请贷款", webApplySet.size());
							description.put("网贷申请额度下限", webApplyMin);
							description.put("网贷申请额度上限", webApplyMax);

							description.put("放款平台数", webLendSet.size());
							description.put("网贷借款额度下限", webLendMin);
							description.put("网贷借款额度上限", webLendMax);

							description.put("逾期平台数", webOverdueSet.size());
							description.put("网贷逾期次数", webOverdueCount);
							description.put("网贷逾期额度下限", webOverdueMin);
							description.put("网贷逾期额度上限", webOverdueMax);
							res.setDescription(description);

						} else {
							res.setColor(Color.info);
						}
					}
					res.setResult(map.get("data"));
					logger.info("正常内容" + res);

				} else {
					res.setColor(Color.info);
					res.setMsg(map.get("resMsg").toString());
					res.setStatus(300);
					logger.info("错误内容" + res);
				}

			}
		} else {
			res.setColor(Color.info);
			res.setStatus(400);
			res.setMsg("访问超时");
			logger.info("错误内容" + res);
		}
		personCreditOverview.setAnalyseMultipleHeadLend(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseZhimaScore(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		Response res = new Response();
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
					res.setColor(Color.primary);
					res.setMsg("测试中");
					res.setStatus(0);
					res.setResult(0);
					
		
		personCreditOverview.setAnalyseZhimaScore(JsonTools.toJson(res));
		personCreditOverviewRepository.save(personCreditOverview);
	}

	private void analyseCellphoneLog(PersonCreditSubmit savePerson, Customer customer,
			Integer id) {
		String account = savePerson.getMobile();
		String password = savePerson.getServicePassword();
		String userId = Common.getPrincipal().getId().toString();
		String realName = savePerson.getName();
		String idCard = savePerson.getIdCard();

		String taskId = null;
		ValueWrapper valueWrapper = cacheManager.getCache("mojieTask")
				.get(account + password + userId + realName + idCard);
		if (valueWrapper == null) {
			taskId = testCreateTask(account, password, userId, realName, idCard);

		} else {
			taskId = cacheManager.getCache("mojieTask").get(account + password + userId + realName + idCard,
					String.class);
		}
		cacheManager.getCache("mojieTask").put(account + password + userId + realName + idCard, taskId);

		while (taskStatus(taskId, 120 * 1000, savePerson)) {
			if (savePerson.getSms() != null && !savePerson.getSms().trim().equals("")) {
				testInputTask(taskId, savePerson.getSms().trim());
			} else {
				testGetVerifyCode(taskId, "sms",savePerson);
				throw new FailResponse(1319, "需要短信验证码");
			}
		}
		PersonCreditOverview personCreditOverview  = personCreditOverviewRepository.findOne(id);
		personCreditOverview.setMojieTask(taskId);
		personCreditOverviewRepository.save(personCreditOverview);
		executor.submit(new BackgroundCellphoneLogAnalysis(account, taskId, personCreditOverviewRepository));

	}

	public static class Response {
		Integer status;
		String msg;
		Color color;
		Object result;
		Object Description;

		public Object getDescription() {
			return Description;
		}

		public void setDescription(Object description) {
			Description = description;
		}

		public Integer getStatus() {
			return status;
		}

		public void setStatus(Integer status) {
			this.status = status;
		}

		public String getMsg() {
			return msg;
		}

		public void setMsg(String msg) {
			this.msg = msg;
		}

		public Color getColor() {
			return color;
		}

		public void setColor(Color color) {
			this.color = color;
		}

		public Object getResult() {
			return result;
		}

		public void setResult(Object result) {
			this.result = result;
		}

		@Override
		public String toString() {
			return "Response [status=" + status + ", msg=" + msg + ", color=" + color + ", result=" + result + "]";
		}

	}

	public enum Color {
		info, primary, warning, success, danger
	}

	public static String testCreateTask(String account, String password, String userId, String realName,
			String idCard) {
		String url = "https://api.51datakey.com/carrier/v3/tasks";

		String bizContent = "" + "{\"account\":\"" + account + "\"," + "\"password\":\"" + password + "\","
				+ "\"user_id\":\"" + userId + "\"," + "\"origin\":\"2\"," + "\"real_name\":\"" + realName + "\","
				+ "\"id_card\":\"" + idCard + "\"}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			return "";
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
		JSONObject object = JSON.parseObject(response.getResponseData());
		if (response.isSuccess()) {
			// TODO 接口调用正常,解析结果响应参数
			String taskId = object.getString("task_id");
			System.out.println("String taskId = " + taskId);
			return taskId;
		} else {
			throw new FailResponse(7666, object.getString("detail"));
		}
	}

	/**
	 * 3. 输入图片/短信验证码
	 */
	public static void testInputTask(String taskId, String result) {
		String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/input";
		String bizContent = "{\"input\":\"" + result + "\"}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			return;
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
	}

	/**
	 * 轮询任务执行状态
	 *
	 * @param taskId
	 * @param timeoutMillis
	 * @return
	 */
	private boolean taskStatus(String taskId, long timeoutMillis,PersonCreditSubmit savePerson) {
		String account = savePerson.getMobile();
		String password = savePerson.getServicePassword();
		String userId = Common.getPrincipal().getId().toString();
		String realName = savePerson.getName();
		String idCard = savePerson.getIdCard();
		

		String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/status-ex";
		MoxieRequest moxieRequest = MoxieRequest.custom().setResponseClass(MoxieResponse.class).build();

		// 轮询任务状态处理逻辑
		long startTime = System.currentTimeMillis();
		while (true) {
			if (System.currentTimeMillis() - startTime > timeoutMillis) { // 超过{timeoutMillis}秒，退出；可根据实际业务情况调整
				// TODO 轮询任务状态, 在规定时间内未返回结果, 引导用户重新申请
				throw new FailResponse(1286, "处理超时，请重新申请");
			}

			try {
				Thread.sleep(2000); // 休眠2秒
			} catch (InterruptedException e) {
				// ignore
			}

			System.out.println(String.format(">>> 调用魔蝎URL: %s", url));
			MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
			MoxieResponse response = null;
			try {
				response = moxieClient.execute(moxieRequest, HttpMethod.GET);
			} catch (Exception e) {
				// TODO 调用接口异常, 打印异常日志并记录异常信息, 此异常逻辑忽略
				MoxieApiException moxieApiException = new MoxieApiException(e);
				System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			}

			if (response == null)
				continue;

			System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());

			JSONObject object = JSON.parseObject(response.getResponseData());
			if (!response.isSuccess()) {
				String errorDesc = object.getString("detail"); // 获取异常信息
				System.out.println("调用魔蝎接口:" + errorDesc);
				if (HttpStatus.SC_NOT_FOUND == response.getResponseCode()) {
					// TODO 轮询任务状态返回结果不存在, 引导用户重新申请
					throw new FailResponse(7511, "返回结果不存在,重新申请");
				}
				// TODO 轮询任务状态返回结果异常, 打印异常信息, 继续轮询
				continue;
			}

			String description = object.getString("description"); // 描述
			String phaseType = object.getString("phase_type"); // 阶段类型
			Boolean canLeave = object.getBoolean("can_leave"); // 授权登录退出标识
			String phaseStatus = object.getString("phase_status"); // 阶段状态
			String errorCode = object.getString("error_code"); // 错误码

			// TODO 预留内部错误码转换, 可根据errorCode转换内部错误码
			
			if (phaseStatus.equalsIgnoreCase("WAIT_CODE")) {
				JSONObject inputObject = object.getJSONObject("input");
				String type = inputObject.getString("type");
				System.out.print(description);
				
				if(description.indexOf("验证码不正确")!=-1 && phaseType.equals("1")) {
					throw new FailResponse(7791, "登录验证码输入错误,请重输");
				}else if(description.indexOf("验证码输入错误")!=-1 && phaseType.equals("2")) {
					throw new FailResponse(7793, "请输入详单验证码");
				}
				
				if (type.equalsIgnoreCase("SMS")) {
					Long waitSeconds = inputObject.getLong("wait_seconds");
					// TODO: 引导用户输入短信验证码处理逻辑, 退出
					// throw new FailResponse(6656, "请输入短信验证码");
				} else if (type.equalsIgnoreCase("IMG")) {
					String value = inputObject.getString("value");
					// TODO: 引导用户输入图片验证码处理逻辑, 退出
					// throw new FailResponse(6656, "请输入短信验证码");
				} else {
					// TODO: 预留扩展
				}
				return true;
			} else if (phaseStatus.equalsIgnoreCase("DONE_FAIL") || phaseStatus.equalsIgnoreCase("DONE_TIMEOUT")) {
				// : TODO 任务登录失败，获取“description”信息，引导用户重新授权
				 if(description.indexOf("验证码输入超时")!=-1){
						testGetVerifyCode(taskId,"sms",savePerson);
						throw new FailResponse(7795, "验证码超时，请输入新验证码");
				}else{
					throw new FailResponse(8642, description);
				}
			} else if (canLeave) {
				// : TODO 任务授权成功，退出与用户交互，等待魔蝎异步回调通知
				System.out.print("任务授权成功，退出与用户交互，等待魔蝎异步回调通知，退出");
				cacheManager.getCache("mojieTask").evict(account + password + userId + realName + idCard);
				return false;
			}
		}
	}

	private  void testGetVerifyCode(String taskId, String type, PersonCreditSubmit savePerson) {

		String account = savePerson.getMobile();
		String password = savePerson.getServicePassword();
		String userId = Common.getPrincipal().getId().toString();
		String realName = savePerson.getName();
		String idCard = savePerson.getIdCard();
		
		String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/verifycode";
		String bizContent = "{\"type\":\"" + type + "\"}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			return;
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());

		JSONObject object = JSON.parseObject(response.getResponseData());
		if (!response.isSuccess()) {
			String errorDesc = object.getString("detail"); // 获取异常信息
			System.out.println("调用魔蝎接口:" + errorDesc);
			// TODO 轮询任务状态返回结果不存在, 引导用户重新申请
			return;
		}

		String description = object.getString("description"); // 描述
		String phaseType = object.getString("phase_type"); // 阶段类型
		Boolean canLeave = object.getBoolean("can_leave"); // 授权登录退出标识
		String phaseStatus = object.getString("phase_status"); // 阶段状态
		String errorCode = object.getString("error_code"); // 错误码
		System.out.println(description);
		
		if (phaseStatus.equalsIgnoreCase("DONE_FAIL")){
			cacheManager.getCache("mojieTask").evict(account + password + userId + realName + idCard);
			throw new FailResponse(7676, "验证超时，请退出重新授权");
		}
		
		
		if (phaseStatus.equalsIgnoreCase("WAIT_CODE") && errorCode.equalsIgnoreCase("0")) {
			// TODO: 解析响应报文，判断"input"元素，显示"description"和倒计时,引导用户输入验证码或超时重新获取
			JSONObject inputObject = object.getJSONObject("input");
			String value = inputObject.getString("value");
			System.out.print("请输入验证码:");
		} else if (phaseStatus.equalsIgnoreCase("WAIT_CODE") && !phaseStatus.equalsIgnoreCase("0")) {
			// TODO: 解析响应报文，判断"input"元素，显示"description",引导用户重新获取
			JSONObject inputObject = object.getJSONObject("input");
			String value = inputObject.getString("value");
			System.out.print("请输入验证码:");
		} else if (phaseStatus.equalsIgnoreCase("DONE_FAIL")) {
			// TODO: 此种情况，接口逻辑调用不正确，退出任务，引导用户重新授权
		} else {
			// TODO: 此种情况，显示"description"，不做任何逻辑处理
		}
	}

	public void personPasswordReset(PersonPasswordReset personPasswordReset) {

		String account = personPasswordReset.getMobile();
		String userId = Common.getPrincipal().getId().toString();
		String realName = personPasswordReset.getName();
		String idCard = personPasswordReset.getIdCard();

		String taskId = testResetPwd(personPasswordReset);
		cacheManager.getCache("mojiePasswordReset").put(account + userId + realName + idCard, taskId);

	}

	private static String testResetPwd(PersonPasswordReset personPasswordReset) {

		String account = personPasswordReset.getMobile();
		String userId = Common.getPrincipal().getId().toString();
		String realName = personPasswordReset.getName();
		String idCard = personPasswordReset.getIdCard();

		String url = "https://api.51datakey.com/carrier/v3/tasks/reset";
		String bizContent = "{\"account\":\"" + account + "\"," + "\"user_id\":\"" + userId + "\"," + "\"real_name\":\""
				+ realName + "\"," + "\"id_card\":\"" + idCard + "\"}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			throw new FailResponse(8351, moxieApiException.getMessage());
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
		JSONObject object = JSON.parseObject(response.getResponseData());
		if (!response.isSuccess()) {
			String errorDesc = object.getString("detail"); // 获取异常信息
			System.out.println("调用魔蝎接口:" + errorDesc);
			throw new FailResponse(6351, errorDesc);
		}

		String description = object.getString("description");
		Boolean finished = object.getBoolean("finished");
		String errorCode = object.getString("error_code");
		// 接口服务调用正常，获取响应报文体，转换正常模型
		if (finished && !errorCode.equalsIgnoreCase("0")) {
			// TODO 异常情况，退出重置服务密码逻辑，获取“description”描述信息，重新引导用户重置服务密码
			throw new FailResponse(6311, description);
		} else if (!finished) {
			// TODO 正常情况，获取需要用户输入的信息，获取“description”描述信息，前端展示引导用户输入（需要与用户交互处理逻辑）
		} else {
			// TODO 正常情况，不需要用户再次输入任何信息，获取“description”描述信息，重置服务密码直接成功
			// （此种情况，暂未出现）
		}
		String taskId = object.getString("task_id");
		System.out.println("String taskId = " + taskId);
		return taskId;
	}

	/**
	 * 提交验证信息
	 * 
	 * @param taskId
	 */
	private static void testResetPwdSubmit(String taskId, String sms, String pwd) {

		String url = "https://api.51datakey.com/carrier/v3/tasks/reset/" + taskId + "/input";
		String bizContent = "{\"type\":\"SUBMIT\",\"inputs\":[{\"type\":\"sms\",\"value\":\"" + sms
				+ "\"},{\"type\":\"pwd\",\"value\":\"" + pwd + "\"}]}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			return;
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
		JSONObject object = JSON.parseObject(response.getResponseData());
		if (!response.isSuccess()) {
			String errorDesc = object.getString("detail"); // 获取异常信息
			throw new FailResponse(6666, errorDesc);
		}

		Boolean finished = object.getBoolean("finished");
		String description = object.getString("description");
		// 接口服务调用正常，获取响应报文体，转换正常模型
		if (finished) {
			// TODO 获取“description”描述信息，提示用户服务密码重置结果
			if(description.indexOf("系统繁忙")!=-1){
				throw new FailResponse(1333, description);
			}else if(description.indexOf("过于简单")!=-1){
				throw new FailResponse(1345, description);
			}else{
				throw new FailResponse(0, description);
			}
		} else {
			throw new FailResponse(7655, description);
		}
	}

	/**
	 * 再次获取验证码,独立于服务密码重置流程
	 *
	 * @param taskId
	 */
	public static void testResetPwdResend(String taskId) {
		String url = "https://api.51datakey.com/carrier/v3/tasks/reset/" + taskId + "/input";
		String bizContent = "{\"type\":\"RESEND\"}";

		System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
		MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
				.setResponseClass(MoxieResponse.class).build();
		MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
		MoxieResponse response;
		try {
			response = moxieClient.execute(moxieRequest, HttpMethod.POST);
		} catch (Exception e) {
			// TODO 接口调用异常, 解析异常信息
			MoxieApiException moxieApiException = new MoxieApiException(e);
			System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
			return;
		}

		System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
		JSONObject object = JSON.parseObject(response.getResponseData());
		if (!response.isSuccess()) {
			String errorDesc = object.getString("detail"); // 获取异常信息
			System.out.println("调用魔蝎接口:" + errorDesc);
			return;
		}

		Boolean finished = object.getBoolean("finished");

		// 接口服务调用正常，获取响应报文体，转换正常模型
		if (finished) {
			// TODO 异常情况，退出重置服务密码逻辑，获取“description”描述信息，重新引导用户重置服务密码
		} else {
			// TODO 正常情况，获取“description”描述信息，引导用户再次下发或等待输入验证码
		}

	}

	public void personPasswordSubmit(PersonPasswordReset personPasswordReset) {

		String account = personPasswordReset.getMobile();
		String userId = Common.getPrincipal().getId().toString();
		String realName = personPasswordReset.getName();
		String idCard = personPasswordReset.getIdCard();
		String sms = personPasswordReset.getSms();
		String pwd = personPasswordReset.getPwd();
		String taskId = null;
		ValueWrapper valueWrapper = cacheManager.getCache("mojiePasswordReset")
				.get(account + userId + realName + idCard);
		if (valueWrapper == null) {
			throw new FailResponse(6759, "缓存过期");
		} else {
			taskId = cacheManager.getCache("mojiePasswordReset").get(account + userId + realName + idCard,
					String.class);
		}
		testResetPwdSubmit(taskId, sms, pwd);
	}

}
