package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetRepository extends PagingAndSortingRepository<Pet, Long> {

  public Pet findById(@Param("id") long id);

}
