package apifengkong.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;

import apifengkong.entity.APISearchLog;
import apifengkong.entity.APISearchLogRepository;
import apifengkong.entity.AccountRechargeLog;
import apifengkong.entity.AccountRechargeLogRepository;
import apifengkong.entity.SupplyAPI;
import apifengkong.service.APISearchLogService;
import apifengkong.util.Common;
import apifengkong.util.DateUtils;
/**
 * 公司报表
 * @author nlj
 *
 */
@Controller
public class reportController {
	@Autowired
	APISearchLogRepository apiSearchLogRepository;
	@Autowired
	AccountRechargeLogRepository accountRechargeLog;
	@Autowired
	APISearchLogService apiSearchLogService;
    @RequestMapping(value="/stuffConsum")
    @ResponseBody
    @PreAuthorize("hasRole('MANAGER')")
	public List<?> getStuffConsum() {//员工消费积分总报表
   
		return apiSearchLogRepository.getStuffConsumReport();
		
	}
	@RequestMapping(value = "/apicount")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> getApiCount() {//消费的接口数量总记录
        Integer customerId=Common.getPrincipal().getCustomer().getId();
		customerId = Common.getPrincipal().getCustomer().getId();
		
		return apiSearchLogRepository.getAPICount(customerId);
	}
	@RequestMapping(value="/consumLog")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<APISearchLog> getConsumLog() {//消费积分  消费时间
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getCustomerConsum(customerId);
	}
	@RequestMapping(value="/rechargeLog")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<AccountRechargeLog> getRechargeLog() {//充值积分  充值时间
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return accountRechargeLog.getRechargeByCustomer(customerId);
	}
    /**
	 * 员工不同时间段具体消费情况
	 */
	
	//今天消费情况
	@RequestMapping(value="/stuffTodayConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> getStuffTodayConsum() {
		
		return apiSearchLogRepository.getStuffDaysConsum(DateUtils.getDayBegin(), DateUtils.getDayEnd());
		
	}
	//昨天消费情况
	@RequestMapping(value="/stuffYestodayConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> getStuffYestodayConsum() {
		
		return apiSearchLogRepository.getStuffDaysConsum(DateUtils.getBeginDayOfYesterday(), DateUtils.getEndDayOfYesterDay());
		
	}
	//本周
	@RequestMapping(value="/stuffTheWeekConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> getStuffTheWeekConsum() {
		
		return apiSearchLogRepository.getStuffDaysConsum(DateUtils.getBeginDayOfWeek(), DateUtils.getEndDayOfWeek());
		
	}
	
	//本月
	@RequestMapping(value="/stuffTheMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> getStuffTheMonthConsum() {
		
		return apiSearchLogRepository.getStuffDaysConsum(DateUtils.getBeginDayOfMonth(), DateUtils.getEndDayOfMonth());
		
	}
	//上月
	@RequestMapping(value="/stuffTheLastMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> stuffTheLastMonthConsum() {
		
		return apiSearchLogRepository.getStuffDaysConsum(DateUtils.getBeginLastMonth(), DateUtils.getEndLastMonth());
		
	}
	/**
	 * 接口不同时间段具体消费情况
	 */
	//今天
	@RequestMapping(value="/apiTodayConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> apiTodayConsum() {
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getAPIDaysCount(customerId, DateUtils.getDayBegin(), DateUtils.getDayEnd());
		
	}
	//昨天
	@RequestMapping(value="/apiYestodayConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> apiYestodayConsum() {
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getAPIDaysCount(customerId, DateUtils.getBeginDayOfYesterday(), DateUtils.getEndDayOfYesterDay());
		
	}
	//本周
	@RequestMapping(value="/apiTheWeekConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> apiTheWeekConsum() {
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getAPIDaysCount(customerId, DateUtils.getBeginDayOfWeek(), DateUtils.getEndDayOfWeek());
		
	}
	//本月
	@RequestMapping(value="/apiTheMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> apiTheMonthConsum() {
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getAPIDaysCount(customerId, DateUtils.getBeginDayOfMonth(), DateUtils.getEndDayOfMonth());
		
	}
	//上月 
	@RequestMapping(value="/apiTheLastMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<?> apiTheLastMonthConsum() {
		Integer customerId=Common.getPrincipal().getCustomer().getId();
		return apiSearchLogRepository.getAPIDaysCount(customerId, DateUtils.getBeginLastMonth(), DateUtils.getEndLastMonth());
		
	}
	/**
	 * 员工报表总记录
	 */
	@RequestMapping(value="/selfConsum")
	@ResponseBody
	@PreAuthorize("hasRole('USER') or hasRole('MANAGER')")
	public List<APISearchLog> getSelfConsum() {
		Integer userId=Common.getPrincipal().getId();
		return apiSearchLogRepository.getSelfConsum(userId);
		
	}
	
	//本月
	@RequestMapping(value="/getSelfTheMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('USER') or hasRole('MANAGER')")
	public List<?> getSelfTheMonthConsum() throws JsonProcessingException {
		Integer userId=Common.getPrincipal().getId();
		
		int diffDays = DateUtils.getDiffDays(DateUtils.getBeginDayOfMonth(),DateUtils.getEndDayOfMonth());
		
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		
		for (int i = 0; i < diffDays; i++) {
			arrayList.add(0);
		}
		System.out.println(diffDays+1);
		List<?> selfDaysConsum = apiSearchLogRepository.getSelfDaysConsum(userId, DateUtils.getBeginDayOfMonth(), DateUtils.getEndDayOfMonth());
		
		for (Object object : selfDaysConsum) {
			Object[] o = (Object[])object;
			arrayList.set(Integer.valueOf(o[0].toString()), Integer.valueOf(o[1].toString()));
		}
		return arrayList;
	}
	//上月
	@RequestMapping(value="/getSelfTheLastMonthConsum")
	@ResponseBody
	@PreAuthorize("hasRole('USER') or hasRole('MANAGER')")
	public List<?> getSelfTheLastMonthConsum() {
        Integer userId=Common.getPrincipal().getId();
		
		int diffDays = DateUtils.getDiffDays(DateUtils.getBeginLastMonth(),DateUtils.getEndLastMonth());
		
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		
		for (int i = 0; i < diffDays; i++) {
			arrayList.add(0);
		}
		System.out.println(diffDays+1);
		List<?> selfDaysConsum = apiSearchLogRepository.getSelfDaysConsum(userId, DateUtils.getBeginLastMonth(), DateUtils.getEndLastMonth());
		
		for (Object object : selfDaysConsum) {
			Object[] o = (Object[])object;
			arrayList.set(Integer.valueOf(o[0].toString()), Integer.valueOf(o[1].toString()));
		}
		return arrayList;
		
	}
	
	/**
	 * 管理员报表类
	 */
	@RequestMapping(value="/getAllCustomerConsumAndRecharge")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
    //所有公司本月积分消费充值
	public List<APISearchLog> getAllCustomerConsumAndRecharge() {
		return apiSearchLogRepository.getAllCustomerConsumAndRecahrge(DateUtils.getBeginDayOfMonth(), DateUtils.getEndDayOfMonth());
	}
	@RequestMapping(value="/getAllCustomerLastMonthConsumAndRecharge")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
    //所有公司上月积分消费
	public List<APISearchLog> getAllCustomerLastMonthConsumAndRecharge() {
		return apiSearchLogRepository.getAllCustomerConsumAndRecahrge(DateUtils.getBeginLastMonth(), DateUtils.getEndLastMonth());
	}
	//所有公司本月充值积分
	@RequestMapping(value="/getAllCustomerRecharge")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public List<AccountRechargeLog> getAllCustomerRecharge() {
		return accountRechargeLog.getAllRechargeByCustomer(DateUtils.getBeginDayOfMonth(), DateUtils.getEndDayOfMonth());
		
	}
	//所有公司上月充值积分
	@RequestMapping(value="/getAllCustomerLastMonthRecharge")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public List<AccountRechargeLog> getAllCustomerLastMonthRecharge() {
		return accountRechargeLog.getAllRechargeByCustomer(DateUtils.getBeginLastMonth(), DateUtils.getEndLastMonth());
		
	}
	//所有公司接口查询记录
	@RequestMapping(value="/getApiSearchCountByCompany")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public List<?> getApiSearchCountByCompany(Integer customerId) {
		
		return apiSearchLogRepository.getApiSearchCountByCustomer(customerId);
		
	}
	
	/**
	 * 财务管理
	 */
//	@RequestMapping(value="/getApiSearchCountByCompany")
//	@ResponseBody
//	public List<?> getAllConsumLog() {
//		if(("ROLE_USER").equals(Common.getPrincipal().getRole().getName())){
//		Integer id=Common.getPrincipal().getId();
//		return apiSearchLogRepository.getAllConsumReport(id);
//		}else if(("ROLE_MANAGER").equals(Common.getPrincipal().getRole().getName())){
//			Integer id=Common.getPrincipal().getCustomer().getId();
//			return apiSearchLogRepository.getAllConsumReport(id);
//		}
//		return null;
//	}
	
}