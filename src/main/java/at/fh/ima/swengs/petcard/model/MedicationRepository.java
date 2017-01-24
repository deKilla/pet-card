package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface MedicationRepository extends PagingAndSortingRepository<Medication, Long> {

  public Medication findById(@Param("id") long id);

}
