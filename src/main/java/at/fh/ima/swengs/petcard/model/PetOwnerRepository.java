package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetOwnerRepository extends PagingAndSortingRepository<PetOwner, Long> {

  public PetOwner findById(@Param("id") long id);

}
