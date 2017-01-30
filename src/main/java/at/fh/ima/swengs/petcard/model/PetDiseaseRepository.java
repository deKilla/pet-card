package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface PetDiseaseRepository extends PagingAndSortingRepository<PetDisease, Long> {

  public PetDisease findById(@Param("id") long id);

  //selects all petDiseases by one pet
  @Query(value = "SELECT pd.* FROM pet_disease pd JOIN pet p ON p.id = pd.pet_id where p.id = ?1", nativeQuery = true)
  public List<PetDisease> findByPet(@Param("id") long id);

}
