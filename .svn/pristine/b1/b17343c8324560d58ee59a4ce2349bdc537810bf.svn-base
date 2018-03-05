package apifengkong.entity;

import java.beans.Transient;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
@Entity
public class AccountRechargeLog  extends BaseEntity{
private Date rechargeTime;
private Integer  integrate;
@ManyToOne
private User user;
@ManyToOne
private Customer customer;
@Transient
public String getFormatCreateTime() {
return	new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(rechargeTime);
}
public Date getRechargeTime() {
	return rechargeTime;
}
public void setRechargeTime(Date rechargeTime) {
	this.rechargeTime = rechargeTime;
}
public Integer getIntegrate() {
	return integrate;
}
public void setIntegrate(Integer integrate) {
	this.integrate = integrate;
}
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


}
