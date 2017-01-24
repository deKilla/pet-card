package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {

  public Doctor findById(@Param("id") long id);

}
