package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface PetOwnerRepository extends PagingAndSortingRepository<PetOwner, Long> {

  public PetOwner findById(@Param("id") long id);

  //selects petOwner by one pet (id)
  @Query(value = "SELECT o.* FROM pet_owner o JOIN pet p ON p.pet_owner_id = o.id WHERE p.id = ?1", nativeQuery = true)
  public PetOwner findByPet(@Param("id") long id);

}
