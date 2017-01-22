package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface PetRepository extends PagingAndSortingRepository<Pet, Long> {

  public List<Pet> findById(@Param("id") Long id);

}
