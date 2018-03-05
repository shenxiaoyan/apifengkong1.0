package apifengkong.entity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonCreditOverviewRepository extends JpaRepository<PersonCreditOverview, Integer> {
	
	PersonCreditOverview findFirstByMojieTaskOrderByIdDesc(String mojieTaskId);

}
