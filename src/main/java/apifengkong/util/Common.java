package apifengkong.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import apifengkong.entity.User;
import apifengkong.service.PersonCreditSearchService.Color;

public class Common {

	public static User getPrincipal() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null || !authentication.isAuthenticated()) {
			return null;
		}
		if (authentication.getPrincipal() instanceof User) {
			return (User) authentication.getPrincipal();
		} else {
			return null;
		}
	}

	public static int youfenMoneyMin(String s) {
		String[] split = s.split("～");
		if (split[0].substring(0, split[0].indexOf("w")).equalsIgnoreCase("0")) {
			return 1;
		} else {
			Double valueOf = Double.valueOf(split[0].substring(0, split[0].indexOf("w")));
			valueOf = valueOf * 10;
			int intValue = valueOf.intValue();
			return intValue;
		}
	}

	public static int youfenMoneyMax(String s) {
		String[] split = s.split("～");
		if (split[1].substring(0, split[1].indexOf("w")).equalsIgnoreCase("0")) {
			return 1;
		} else {
			Double valueOf = Double.valueOf(split[1].substring(0, split[1].indexOf("w")));
			valueOf = valueOf * 10;
			int intValue = valueOf.intValue();
			return intValue;
		}
	}

	public static List<VerifyCodeMessage> verifyTrans(List<String> list) {
		ArrayList<VerifyCodeMessage> arrayList = new ArrayList<VerifyCodeMessage>();
		for (String str : list) {
			if(verifyTable.containsKey(str)){
				arrayList.add(verifyTable.get(str));
			}
		}
		return arrayList;
	}
	
	
	
	

	static HashMap<String, VerifyCodeMessage> verifyTable;
	static {
		verifyTable = new HashMap<String, VerifyCodeMessage>();
		verifyTable.put("V_CN_NA", new VerifyCodeMessage("V_CN_NA", "查询不到身份证信息", Color.warning));
		verifyTable.put("V_CN_NM_UM", new VerifyCodeMessage("V_CN_NM_UM", "姓名与身份证不匹配", Color.danger));
		verifyTable.put("V_CN_NM_MA", new VerifyCodeMessage("V_CN_NM_MA", "姓名与身份证匹配", Color.success));
		
		verifyTable.put("V_PH_NA", new VerifyCodeMessage("V_PH_NA", "查询不到电话号码信息", Color.warning));
		verifyTable.put("V_PH_CN_UM", new VerifyCodeMessage("V_PH_CN_UM", "电话号码与身份证不匹配", Color.danger));
		verifyTable.put("V_PH_CN_MA_UL30D", new VerifyCodeMessage("V_PH_CN_MA_UL30D", "电话号码与身份证匹配,1个月内有使用", Color.success));
		verifyTable.put("V_PH_CN_MA_UL90D", new VerifyCodeMessage("V_PH_CN_MA_UL90D", "电话号码与身份证匹配,3个月内有使用", Color.success));
		verifyTable.put("V_PH_CN_MA_UL180D", new VerifyCodeMessage("V_PH_CN_MA_UL180D", "电话号码与身份证匹配,半年内有使用", Color.success));
		verifyTable.put("V_PH_CN_MA_UM180D", new VerifyCodeMessage("V_PH_CN_MA_UM180D", "电话号码与身份证匹配,半年内没有使用", Color.warning));
		
		verifyTable.put("V_PH_NM_UM", new VerifyCodeMessage("V_PH_NM_UM", "电话号码与姓名不匹配", Color.danger));
		verifyTable.put("V_PH_NM_MA_UL30D", new VerifyCodeMessage("V_PH_NM_MA_UL30D", "电话号码与姓名匹配,1个月内有使用", Color.success));
		verifyTable.put("V_PH_NM_MA_UL90D", new VerifyCodeMessage("V_PH_NM_MA_UL90D", "电话号码与姓名匹配,3个月内有使用", Color.success));
		verifyTable.put("V_PH_NM_MA_UL180D", new VerifyCodeMessage("V_PH_NM_MA_UL180D", "电话号码与姓名匹配,半年内有使用", Color.success));
		verifyTable.put("V_PH_NM_MA_UM180D", new VerifyCodeMessage("V_PH_NM_MA_UM180D", "电话号码与姓名匹配,半年内没有使用", Color.warning));
		
		verifyTable.put("V_BC_CN_UK", new VerifyCodeMessage("V_BC_CN_UK", "银行卡与身份证关系未知", Color.warning));
		verifyTable.put("V_BC_CN_UM", new VerifyCodeMessage("V_BC_CN_UM", "银行卡与身份证不匹配", Color.danger));
		verifyTable.put("V_BC_CN_MA_UL180D", new VerifyCodeMessage("V_BC_CN_MA_UL180D", "银行卡与身份证匹配,半年内有使用", Color.success));
		verifyTable.put("V_BC_CN_MA_UL360D", new VerifyCodeMessage("V_BC_CN_MA_UL360D", "银行卡与身份证匹配,1年内有使用", Color.success));
		verifyTable.put("V_BC_CN_MA_UM360D", new VerifyCodeMessage("V_BC_CN_MA_UM360D", "银行卡与身份证匹配,1年内没有使用", Color.warning));
		
		verifyTable.put("V_BC_PH_UK", new VerifyCodeMessage("V_BC_PH_UK", "银行卡与手机号关系未知", Color.warning));
		verifyTable.put("V_BC_PH_UM", new VerifyCodeMessage("V_BC_PH_UM", "银行卡与手机号不匹配", Color.danger));
		verifyTable.put("V_BC_PH_MA_UL180D", new VerifyCodeMessage("V_BC_PH_MA_UL180D", "银行卡与手机号匹配,半年内有使用", Color.success));
		verifyTable.put("V_BC_PH_MA_UL360D", new VerifyCodeMessage("V_BC_PH_MA_UL360D", "银行卡与手机号匹配,1年内有使用", Color.success));
		verifyTable.put("V_BC_PH_MA_UM360D", new VerifyCodeMessage("V_BC_PH_MA_UM360D", "银行卡与手机号匹配,1年内没有使用", Color.warning));
		
		verifyTable.put("V_AD_CN_UK", new VerifyCodeMessage("V_AD_CN_UK", "地址与身份证关系未知", Color.warning));
		verifyTable.put("V_AD_CN_UM", new VerifyCodeMessage("V_AD_CN_UM", "地址与身份证不匹配", Color.danger));
		verifyTable.put("V_AD_CN_MA_UL180D", new VerifyCodeMessage("V_AD_CN_MA_UL180D", "地址与身份证匹配,半年内有使用", Color.success));
		verifyTable.put("V_AD_CN_MA_UL360D", new VerifyCodeMessage("V_AD_CN_MA_UL360D", "地址与身份证匹配,1年内有使用", Color.success));
		verifyTable.put("V_AD_CN_MA_UM360D", new VerifyCodeMessage("V_AD_CN_MA_UM360D", "地址与身份证匹配,1年内没有使用", Color.warning));
		
		verifyTable.put("V_AD_PH_UK", new VerifyCodeMessage("V_AD_PH_UK", "地址与手机号关系未知", Color.warning));
		verifyTable.put("V_AD_PH_UM", new VerifyCodeMessage("V_AD_PH_UM", "地址与手机号不匹配", Color.danger));
		verifyTable.put("V_AD_PH_MA_UL180D", new VerifyCodeMessage("V_AD_PH_MA_UL180D", "地址与手机号匹配,半年内有使用", Color.success));
		verifyTable.put("V_AD_PH_MA_UL360D", new VerifyCodeMessage("V_AD_PH_MA_UL360D", "地址与手机号匹配,1年内有使用", Color.success));
		verifyTable.put("V_AD_PH_MA_UM360D", new VerifyCodeMessage("V_AD_PH_MA_UM360D", "地址与手机号匹配,1年内没有使用", Color.warning));
		
	}

	public static class VerifyCodeMessage {
		private String code;
		private String message;
		private Color color;

		public String getCode() {
			return code;
		}

		public void setCode(String code) {
			this.code = code;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public Color getColor() {
			return color;
		}

		public void setColor(Color color) {
			this.color = color;
		}

		public VerifyCodeMessage(String code, String message, Color color) {
			super();
			this.code = code;
			this.message = message;
			this.color = color;
		}

	}

}
