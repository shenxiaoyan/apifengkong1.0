package apifengkong.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	public Customer findByAppCode(String appCode);
	@Query(value="select COUNT(*) from customer ",nativeQuery=true)
    public Integer getAllCustomerCount();
}
