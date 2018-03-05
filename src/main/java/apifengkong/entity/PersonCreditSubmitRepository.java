package apifengkong.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonCreditSubmitRepository extends JpaRepository<PersonCreditSubmit, Integer> {
	//根据公司获取个人信息
	List<PersonCreditSubmit> findByCustomerOrderByIdDesc(Customer customer);

}
