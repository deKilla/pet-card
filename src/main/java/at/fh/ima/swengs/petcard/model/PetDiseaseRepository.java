package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetDiseaseRepository extends PagingAndSortingRepository<PetDisease, Long> {

  public PetDisease findById(@Param("id") long id);

}
