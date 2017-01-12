package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;


public interface PetRepository extends PagingAndSortingRepository<Pet, Long> {

}
