package apifengkong.entity;


import java.beans.Transient;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="api_search_log")
@Table( indexes = {@Index(columnList = "parameters")})
public class APISearchLog  extends BaseEntity{

	@ManyToOne
	private SupplyAPI api;
	
	private boolean cache;
	
	@ManyToOne
	private Customer customer;
	
	@ManyToOne
	private User user;
	
	@Lob
	private String result;
	
	@Column(length=1000)
	private String parameters;
	
	private Integer price;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isCache() {
		return cache;
	}

	public void setCache(boolean cache) {
		this.cache = cache;
	}

	public String getParameters() {
		return parameters;
	}

	public void setParameters(String parameters) {
		this.parameters = parameters;
	}
	public Date getCreateTime() {
		return createTime;
	}
	
	public String getFormatCreateTime() {
	return	new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(createTime);
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public SupplyAPI getApi() {
		return api;
	}

	public void setApi(SupplyAPI api) {
		this.api = api;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}
	
	
}
