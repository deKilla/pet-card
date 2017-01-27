package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface MedicationRepository extends PagingAndSortingRepository<Medication, Long> {

  public Medication findById(@Param("id") long id);

  @Query(value = "select m.* from medication m join pet_medication pm on m.id = pm.medication_id join pet p on pm.pet_id = p.id where p.id = ?1", nativeQuery = true)
  public List<Medication> findByPet(@Param("id") long id);

}
