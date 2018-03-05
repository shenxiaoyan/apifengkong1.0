package apifengkong.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Supplier extends BaseEntity {

	private String supplyName;
	private String code;
	private String linkman;
	private String linkmanMobile;
	private String webURL;
	private String appCode;
	private String appSecret;
	
	@OneToMany(mappedBy="supplier")
	@JsonIgnore
	private Set<SupplyAPI> apis;
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Set<SupplyAPI> getApis() {
		return apis;
	}
	public void setApis(Set<SupplyAPI> apis) {
		this.apis = apis;
	}
	public String getSupplyName() {
		return supplyName;
	}
	public void setSupplyName(String supplyName) {
		this.supplyName = supplyName;
	}
	public String getLinkman() {
		return linkman;
	}
	public void setLinkman(String linkman) {
		this.linkman = linkman;
	}
	public String getLinkmanMobile() {
		return linkmanMobile;
	}
	public void setLinkmanMobile(String linkmanMobile) {
		this.linkmanMobile = linkmanMobile;
	}
	public String getWebURL() {
		return webURL;
	}
	public void setWebURL(String webURL) {
		this.webURL = webURL;
	}
	public String getAppCode() {
		return appCode;
	}
	public void setAppCode(String appCode) {
		this.appCode = appCode;
	}
	public String getAppSecret() {
		return appSecret;
	}
	public void setAppSecret(String appSecret) {
		this.appSecret = appSecret;
	}
	
	
}
