package apifengkong.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SupplyAPIRepository extends JpaRepository<SupplyAPI, Integer> {
	@Query(value="select s from #{#entityName} s where s.apiType=? group by s.id")
	List<SupplyAPI> getShowList(Integer apitypeId);
	/**
	 * 接口积分查询显示
	 */
	@Query(value="select s.price from #{#entityName} s where s.id=?")
	List<SupplyAPI> showScore(Integer apiId);
}
