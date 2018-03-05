package apifengkong.entity;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(indexes = {@Index(name="mojie_task",columnList = "mojieTask")})
public class PersonCreditOverview extends BaseEntity{
	
	@OneToOne
	@JsonIgnore
	PersonCreditSubmit person;
	
	String area;
	String sex;
	String birth;
	Integer age;
	
	String mobileCompany;
	
	@Lob
	String analyseIdCard;
	
	@Lob
	String analyseCellphone;

	@Lob
	String analyseDishonestBlacklist;

	@Lob
	String analyseCriminal;
	
	@Lob
	String analyseMultipleHeadLend;

	@Lob
	String analyseAntifraud;
	
	@Lob
	String analyseCellphoneLog;
	
	
	String analyseZhimaScore;
	
	String mojieTask;
	
	String status;
	

	public String getAnalyseZhimaScore() {
		return analyseZhimaScore;
	}

	public void setAnalyseZhimaScore(String analyseZhimaScore) {
		this.analyseZhimaScore = analyseZhimaScore;
	}

	public String getAnalyseCellphoneLog() {
		return analyseCellphoneLog;
	}

	public void setAnalyseCellphoneLog(String analyseCellphoneLog) {
		this.analyseCellphoneLog = analyseCellphoneLog;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMojieTask() {
		return mojieTask;
	}

	public void setMojieTask(String mojieTaskId) {
		this.mojieTask = mojieTaskId;
	}

	public String getAnalyseAntifraud() {
		return analyseAntifraud;
	}

	public void setAnalyseAntifraud(String analyseAntifraud) {
		this.analyseAntifraud = analyseAntifraud;
	}

	public PersonCreditSubmit getPerson() {
		return person;
	}

	public void setPerson(PersonCreditSubmit person) {
		this.person = person;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getMobileCompany() {
		return mobileCompany;
	}

	public void setMobileCompany(String mobileCompany) {
		this.mobileCompany = mobileCompany;
	}

	public String getAnalyseIdCard() {
		return analyseIdCard;
	}

	public void setAnalyseIdCard(String analyseIdCard) {
		this.analyseIdCard = analyseIdCard;
	}

	public String getAnalyseCellphone() {
		return analyseCellphone;
	}

	public void setAnalyseCellphone(String analyseCellphone) {
		this.analyseCellphone = analyseCellphone;
	}


	public String getAnalyseDishonestBlacklist() {
		return analyseDishonestBlacklist;
	}

	public void setAnalyseDishonestBlacklist(String analyseDishonestBlacklist) {
		this.analyseDishonestBlacklist = analyseDishonestBlacklist;
	}


	public String getAnalyseCriminal() {
		return analyseCriminal;
	}

	public void setAnalyseCriminal(String analyseCriminal) {
		this.analyseCriminal = analyseCriminal;
	}

	public String getAnalyseMultipleHeadLend() {
		return analyseMultipleHeadLend;
	}

	public void setAnalyseMultipleHeadLend(String analyseMultipleHeadLend) {
		this.analyseMultipleHeadLend = analyseMultipleHeadLend;
	}

	
	


}
