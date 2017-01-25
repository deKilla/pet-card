package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface PetRepository extends PagingAndSortingRepository<Pet, Long> {

  public Pet findById(@Param("id") long id);

  @Query(value = "SELECT * FROM pet p INNER JOIN pet_owner o ON p.pet_owner_id = o.id WHERE p.id = ?1", nativeQuery = true)
  public Pet findByPetId(@Param("id") long id);

  @Query(value = "SELECT pd.* FROM pet_disease pd INNER JOIN pet p ON pd.pet_id = p.id INNER JOIN disease d ON pd.disease_id = d.id WHERE p.id = ?1", nativeQuery = true)
  public Pet findDiseaseByPetId(@Param("id") long id);

  @Query(value = "SELECT pm.* FROM pet_medication pm INNER JOIN pet p ON pm.pet_id = p.id INNER JOIN medication m ON pm.medication_id = m.id WHERE p.id = ?1", nativeQuery = true)
  public Pet findMedicationByPetId(@Param("id") long id);

}

