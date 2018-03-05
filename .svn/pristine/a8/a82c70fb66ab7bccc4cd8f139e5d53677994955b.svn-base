package apifengkong.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="api_parameter_couple")
public class APIParameterCouple extends BaseEntity {

	private String uniformParameter;//第三方参数查询进入参数
	private String searchParameter;//查询第三方接口参数
	private String paramDesc;//参数描述
	private String defaultValue;
	
	@ManyToMany(mappedBy="parameterCouples")
	@JsonIgnore
	private Set<SupplyAPI> apis = new HashSet<SupplyAPI>();

	public String getParamDesc() {
		return paramDesc;
	}

	public void setParamDesc(String paramDesc) {
		this.paramDesc = paramDesc;
	}

	public String getUniformParameter() {
		return uniformParameter;
	}

	public void setUniformParameter(String uniformParameter) {
		this.uniformParameter = uniformParameter;
	}

	public String getSearchParameter() {
		return searchParameter;
	}

	public void setSearchParameter(String searchParameter) {
		this.searchParameter = searchParameter;
	}

	public Set<SupplyAPI> getApis() {
		return apis;
	}

	public void setApis(Set<SupplyAPI> apis) {
		this.apis = apis;
	}

	public String getDefaultValue() {
		return defaultValue;
	}

	public void setDefaultValue(String defaultValue) {
		this.defaultValue = defaultValue;
	} 
	
}
