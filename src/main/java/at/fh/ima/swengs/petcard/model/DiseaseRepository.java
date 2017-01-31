package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface DiseaseRepository extends PagingAndSortingRepository<Disease, Long> {

  public Disease findById(@Param("id") long id);

  //selects all diseases by one pet
  @Query(value = "select d.* from disease d join pet_disease pd on d.id = pd.disease_id join pet p on pd.pet_id = p.id where p.id = ?1 order by pd.id", nativeQuery = true)
  public List<Disease> findByPet(@Param("id") long id);

}
