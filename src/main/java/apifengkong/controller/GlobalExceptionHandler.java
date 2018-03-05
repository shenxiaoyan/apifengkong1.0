package apifengkong.controller;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import apifengkong.util.FailResponse;

@ControllerAdvice
public class GlobalExceptionHandler {


	@ExceptionHandler(java.lang.RuntimeException.class)
	@ResponseBody
	public Map handleBizExp(java.lang.Exception ex) {

		HashMap<String, Object> hashMap = new HashMap<String,Object>();
		
		if (ex instanceof FailResponse) {
			hashMap.put("status", "fail");
			hashMap.put("code", ((FailResponse)ex).getCode());
			hashMap.put("message", ((FailResponse)ex).getMessage());
			return hashMap;
		}else{
			ex.printStackTrace();
			return null;
		}
		 

	}
}