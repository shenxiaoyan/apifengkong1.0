package apifengkong.entity;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface APISearchLogRepository extends JpaRepository<APISearchLog, Integer> {
	APISearchLog findFirstByApiAndParametersOrderByCreateTimeDesc(SupplyAPI api,String parameters);
	/**
	 * 报告下载
	 */
	@Query(value="select l from #{#entityName} l where l.user.id=?")
	List<APISearchLog> getApiSearchLog(Integer id);
	/**
	 *员工消费记录
	 * @return
	 */
	@Query(value="select SUM(l.price) from #{#entityName} l where l.user.role.name!='ROLE_ADMIN'")
	List<?> getStuffConsumReport();
	//员工不同时间段消费
	@Query(value="select l.user.username,SUM(l.price) from #{#entityName} l where l.user.role.name!='ROLE_ADMIN' and createTime between ?1 and ?2 group by l.user")
	List<?> getStuffDaysConsum(Date startTime,Date endTime);
	//接口数量报表总记录
	@Query(value="select l.api.description , count(l.api.id) from #{#entityName} l where l.customer.id=? group by l.api.id ")
	List<?> getAPICount(Integer customerId);
	//接口查询数量时间段记录
	@Query(value="select l.api.description , count(l.api.id) from #{#entityName} l where l.customer.id=?1 and createTime between ?2 and ?3 group by l.api.id ")
	List<?> getAPIDaysCount(Integer customerId,Date startTime,Date endTime);
	//本人消费报表
	@Query(value="select l.price from #{#entityName} l where l.user.id=?")
	List<APISearchLog> getSelfConsum(Integer userId);
	//本人消费记录时间段记录
	@Query(value="select DATE_FORMAT(l.createTime,'%d') as a,SUM(l.price) as b from #{#entityName} l where l.user.id=?1 and createTime between ?2 and ?3 and l.user.role.name!='ADMIN' group by DATE_FORMAT(l.createTime,'%d')")
	List<?> getSelfDaysConsum(Integer Id,Date startTime,Date endTime);
	@Query(value="select l from #{#entityName} l where l.customer.id=?")
	List<APISearchLog> getCustomerConsum(Integer customerId);
	/**
	 * 管理员报表类
	 */
	//所有公司阶段内充值消费积分 
	@Query(value="select l.customer.companyName,SUM(l.price),SUM(a.integrate) from #{#entityName} l,AccountRechargeLog a where  l.customer.id=a.customer.id and l.createTime between ?1 and ?2  group by l.customer.id")
	List<APISearchLog> getAllCustomerConsumAndRecahrge(Date startDate,Date endDate);
	
	//公司接口数量查询报表
	@Query(value="select l.customer.id,l.customer.companyName,l.api.description,Count(l.api.id) from #{#entityName} l where l.customer.id=? group by l.api.id")
	//List<String[]> getApiSearchCountByCustomer();
	List<?> getApiSearchCountByCustomer(Integer customerId);
	/**
	 * 财务管理类
//	 */
//	//员工消费及其记录
//	@Query(value="select SUM(l.price),count(l.api.id),c.remainder from #{#entityName} l,Customer c where l.customer.id=c.id and l.user.id=? ")
//	List<?> getStuffConsumLog(Integer stuffId);
//	//老板查看所有消费记录
//	@Query(value="select sum(a.integrate),count(l.api.id),SUM(l.price),c.remainder from #{#entityName} l，AccountRechargeLog a,Customer c where l.customer.id=c.id and l.customer.id=?")
//	List<?> getAllConsumReport(Integer customerId);
}


