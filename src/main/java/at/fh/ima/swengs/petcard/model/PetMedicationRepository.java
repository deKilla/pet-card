package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetMedicationRepository extends PagingAndSortingRepository<PetMedication, Long> {

  public PetMedication findById(@Param("id") long id);



}
