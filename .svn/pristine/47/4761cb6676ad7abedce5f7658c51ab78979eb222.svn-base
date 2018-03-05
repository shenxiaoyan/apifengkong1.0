package apifengkong.entity;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

public interface APIParameterCoupleRepository extends JpaRepository<APIParameterCouple, Integer> {

	List<APIParameterCouple> findByUniformParameterIn(Set<String> paremeters);
	APIParameterCouple findByUniformParameterAndSearchParameter(String uniformParameter, String searchParameter);
}
