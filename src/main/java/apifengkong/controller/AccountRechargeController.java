package apifengkong.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import apifengkong.entity.AccountRechargeLog;
import apifengkong.entity.AccountRechargeLogRepository;
import apifengkong.service.RechargeService;
import apifengkong.util.DateUtils;

@Controller
public class AccountRechargeController {

	@Autowired
	RechargeService rechargeService;
	@Autowired
	AccountRechargeLogRepository accountRechargeLogRepository;

	@RequestMapping(value = "/recharge", method = { RequestMethod.POST },produces={"application/json;charset=UTF-8"})
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN') ")
	public String recharge(@RequestBody A a) {
		rechargeService.recharge(a.getIntegrate(), a.getCustomerId());
		return "success";
	}
	//获取所有充值记录
		@RequestMapping(value="/getRechargeLog")
		@ResponseBody
		@PreAuthorize("hasRole('ADMIN')")
		public List<AccountRechargeLog> getRechargeLog() {
			return accountRechargeLogRepository.getRechargeLog();
		}
	public static class A{
		private Integer customerId;
		private Integer integrate;
		public Integer getCustomerId() {
			return customerId;
		}
		public void setCustomerId(Integer customerId) {
			this.customerId = customerId;
		}
		public Integer getIntegrate() {
			return integrate;
		}
		public void setIntegrate(Integer integrate) {
			this.integrate = integrate;
		}
		
		
	}
}
