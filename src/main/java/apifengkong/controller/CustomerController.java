package apifengkong.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import apifengkong.entity.Customer;
import apifengkong.entity.CustomerRepository;

@Controller
@RequestMapping(value="/customer")
public class CustomerController {
	
	@Autowired
	CustomerRepository customerRepository;
	
	
	@RequestMapping(value="/info/{id}")
	@ResponseBody
	@PostAuthorize("hasRole('ADMIN') or (hasRole('MANAGER') and principal.customer.id.equals(returnObject.id))")
	public Customer info(@PathVariable Integer id){
		return customerRepository.findOne(id);
	}
	
	@RequestMapping(value="/list")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public List<Customer> list(){
		return customerRepository.findAll();
	}
	
	
	@RequestMapping(value="/insertOrUpdate",method=RequestMethod.POST)
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public Customer insertOrUpdate(@RequestBody Customer customer){
		if(customer.getCreateTime()==null){
			customer.setCreateTime(new Date());
		}
		return customerRepository.save(customer);
	}
	@RequestMapping(value="/count")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public Integer getCustomerCount() {
		System.out.println(customerRepository.getAllCustomerCount()+"--------------------------");
		return customerRepository.getAllCustomerCount();
	}
    
}
