package apifengkong.controller;

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
import apifengkong.entity.Role;
import apifengkong.entity.RoleRepository;
import apifengkong.entity.User;
import apifengkong.entity.UserRepository;
import apifengkong.util.Common;

@Controller
@RequestMapping(value="/user")
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository; 
	
	@RequestMapping(value="/info")
	@ResponseBody
	public User info(){
		 User findOne = Common.getPrincipal();
		 findOne.setPassword(null);
		 return findOne;
	}
	
	@RequestMapping(value="/info/{id}")
	@ResponseBody
	@PostAuthorize("hasRole('ADMIN') or (hasRole('MANAGER') and principal.customer.id.equals(returnObject.customer.id))")
	public User info(@PathVariable Integer id){
		 User findOne = userRepository.findOne(id);
		 findOne.setPassword(null);
		 return findOne;
	}
	
	@RequestMapping(value="/list")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public List<User> list(){
		
		return userRepository.findAll();
	}
	@RequestMapping(value="/count")
	@ResponseBody
	@PreAuthorize("hasRole('ADMIN')")
	public Integer getStuffCount() {
		return userRepository.getAllStuffCount();
		
	}
	
	@RequestMapping(value="/listEmployee")
	@ResponseBody
	@PreAuthorize("hasRole('MANAGER')")
	public List<User> listEmployee(){
		Customer customer = Common.getPrincipal().getCustomer();
		List<User> findByCustomer = userRepository.findByCustomer(customer);
		for (User user : findByCustomer) {
			user.setPassword(null);
		}
		return findByCustomer;
	}
	
	
	@RequestMapping(value="/insertOrUpdateManager",method=RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	public User insertOrUpdateManager(@RequestBody User user){
		Role findByName = roleRepository.findByName("ROLE_MANAGER");
		user.setRole(findByName);
		return userRepository.save(user);
	}
	
	@RequestMapping(value="/insertOrUpdateEmployee",method=RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN') or (hasRole('MANAGER') and (#user.customer == null or #user.customer.id.equals(principal.customer.id)))")
	@ResponseBody
	public User insertOrUpdateEmployee(@RequestBody User user){
		Role findByName = roleRepository.findByName("ROLE_USER");
		user.setRole(findByName);
		if(Common.getPrincipal().getRole().getName().equals("ROLE_MANAGER")){
			user.setCustomer(Common.getPrincipal().getCustomer());
		}
		
		return userRepository.save(user);
	}
	
}
