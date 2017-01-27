package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetMedicationRepository extends PagingAndSortingRepository<PetMedication, Long> {

  public PetMedication findById(@Param("id") long id);

  @Query(value = "select pm.* from pet_medication pm join pet p on p.id = pm.pet_id where p.id = ?1", nativeQuery = true)
  public PetOwner findByPet(@Param("id") long id);

}
