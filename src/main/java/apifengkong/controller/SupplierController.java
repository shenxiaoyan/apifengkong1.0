package apifengkong.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import apifengkong.entity.Customer;
import apifengkong.entity.CustomerRepository;
import apifengkong.entity.Supplier;
import apifengkong.entity.SupplierRepository;

@Controller
@RequestMapping(value="/supplier")
public class SupplierController {
	
		@Autowired
		SupplierRepository supplierRepository;
		
		
		@RequestMapping(value="/info/{id}")
		@PreAuthorize("hasRole('ADMIN')")
		@ResponseBody
		public Supplier info(@PathVariable Integer id){
			return supplierRepository.findOne(id);
		}
		
		@RequestMapping(value="/list")
		@PreAuthorize("hasRole('ADMIN')")
		@ResponseBody
		public List<Supplier> list(){
			return supplierRepository.findAll();
		}
		
		@RequestMapping(value="/insertOrUpdate",method=RequestMethod.POST)
		@ResponseBody
		@PreAuthorize("hasRole('ADMIN')")
		public Supplier insertOrUpdate(@RequestBody Supplier supplier){
			return supplierRepository.save(supplier);
		}

	
}
