package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;


public interface MedicationRepository extends PagingAndSortingRepository<Medication, Long> {

}
