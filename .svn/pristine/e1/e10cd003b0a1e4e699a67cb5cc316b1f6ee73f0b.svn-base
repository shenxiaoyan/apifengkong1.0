package apifengkong.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import apifengkong.entity.UserRepository;
import apifengkong.util.Common;

@Controller
public class HomeController {
	@Autowired
	UserRepository userRepository;
	@RequestMapping("/")
    public String index(Model model) {
		if(Common.getPrincipal().getRole().getName().equals("ROLE_USER")){
			return "redirect:company/index.html";
		}else if(Common.getPrincipal().getRole().getName().equals("ROLE_ADMIN")){
			return "redirect:admin/index.html";
		}else if(Common.getPrincipal().getRole().getName().equals("ROLE_MANAGER")){
			return "redirect:company/index.html";
		}else{
			return "index";
		}
    }
	
	@RequestMapping("/login")
    public String login(Model model) {
		return "login";
    }
	
}
