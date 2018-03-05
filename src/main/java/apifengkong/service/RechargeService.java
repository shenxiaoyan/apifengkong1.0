package apifengkong.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import apifengkong.entity.AccountRechargeLog;
import apifengkong.entity.AccountRechargeLogRepository;
import apifengkong.entity.Customer;
import apifengkong.entity.CustomerRepository;
import apifengkong.util.Common;
@Service
public class RechargeService {
	@Autowired
	CustomerRepository customerRepository;
	@Autowired
	AccountRechargeLogRepository accountRechargeLogRepository;
    //账户充值操作
	public void recharge(Integer integrate, Integer customerId) {
		System.out.println(customerId+"****************************");
		Customer customer = customerRepository.getOne(customerId);
		System.out.println(customer.getId()+"*********************");
		Integer remainder = customer.getRemainder();
		if(integrate!=null){
		remainder+= integrate;
		}
		customer.setRemainder(remainder);
		customerRepository.save(customer);
		AccountRechargeLog accountRechargeLog=new AccountRechargeLog();
//		accountRechargeLog2.setId(customerId);
//		accountRechargeLog2.setCustomer(customer);
//		accountRechargeLog2.setIntegrate(integrate);
//		accountRechargeLog2.setRechargeTime(new Date());
//		accountRechargeLog2.setUser(Common.getPrincipal());
//		List<AccountRechargeLog> accountRechargeLog = new ArrayList<AccountRechargeLog>();
//		for (AccountRechargeLog accountRechargeLog2 : accountRechargeLog) {
			accountRechargeLog.setId(accountRechargeLog.getId());
			accountRechargeLog.setCustomer(customer);
			accountRechargeLog.setIntegrate(integrate);
			accountRechargeLog.setRechargeTime(new Date());
			accountRechargeLog.setUser(Common.getPrincipal());
			customer.setRemainder(remainder);
//		}
		accountRechargeLogRepository.save(accountRechargeLog);

	}
}
