package apifengkong.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

@Entity
public class PersonCreditSubmit extends BaseEntity{
	
	@OneToOne(mappedBy="person")
	PersonCreditOverview personCreditOverview;
	
	
	@ManyToOne
	User user;
	
	@ManyToOne
	Customer customer;
	
	@NotBlank
	@Length(min = 2, max = 4)
	String name="";
	@NotBlank
	@Digits(integer = 11, fraction = 0, message = "需要11位整数数字")
	String mobile="";

	@NotBlank
	@Length(min = 18, max = 18,message = "需要18位长度")
	String IdCard="";

	@NotBlank
	String bankCard="";


	@NotBlank
	String servicePassword="";
	
	String sms;

	@NotBlank
	String commonAddress="";

	@NotBlank
	@Length(min = 2, max = 4)
	String linkman1Name="";

	String linkman1Relationship="";

	@NotBlank
	@Digits(integer = 11, fraction = 0,message = "需要11位整数数字")
	String linkman1Mobile="";

	@NotBlank
	@Length(min = 2, max = 4)
	String linkman2Name="";
	String linkman2Relationship="";
	@NotBlank
	@Digits(integer = 11, fraction = 0 ,message = "需要11位整数数字")
	String linkman2Mobile="";
	
	Date createAt;


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getSms() {
		return sms;
	}

	public void setSms(String sms) {
		this.sms = sms;
	}

	public PersonCreditOverview getPersonCreditOverview() {
		return personCreditOverview;
	}

	public void setPersonCreditOverview(PersonCreditOverview personCreditOverview) {
		this.personCreditOverview = personCreditOverview;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getServicePassword() {
		return servicePassword;
	}

	public void setServicePassword(String servicePassword) {
		this.servicePassword = servicePassword;
	}

	public String getIdCard() {
		return IdCard;
	}

	public void setIdCard(String idCard) {
		IdCard = idCard.toUpperCase();
	}

	public String getCommonAddress() {
		return commonAddress;
	}

	public void setCommonAddress(String commonAddress) {
		this.commonAddress = commonAddress;
	}

	public String getLinkman1Name() {
		return linkman1Name;
	}

	public void setLinkman1Name(String linkman1Name) {
		this.linkman1Name = linkman1Name;
	}

	public String getLinkman1Relationship() {
		return linkman1Relationship;
	}

	public void setLinkman1Relationship(String linkman1Relationship) {
		this.linkman1Relationship = linkman1Relationship;
	}

	public String getLinkman1Mobile() {
		return linkman1Mobile;
	}

	public void setLinkman1Mobile(String linkman1Mobile) {
		this.linkman1Mobile = linkman1Mobile;
	}

	public String getLinkman2Name() {
		return linkman2Name;
	}

	public void setLinkman2Name(String linkman2Name) {
		this.linkman2Name = linkman2Name;
	}

	public String getLinkman2Relationship() {
		return linkman2Relationship;
	}

	public void setLinkman2Relationship(String linkman2Relationship) {
		this.linkman2Relationship = linkman2Relationship;
	}

	public String getLinkman2Mobile() {
		return linkman2Mobile;
	}

	public void setLinkman2Mobile(String linkman2Mobile) {
		this.linkman2Mobile = linkman2Mobile;
	}


	public String getBankCard() {
		return bankCard;
	}

	public void setBankCard(String bankCard) {
		this.bankCard = bankCard;
	}


}
