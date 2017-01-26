package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {

  public Doctor findById(@Param("id") long id);

  public Doctor findByFirstName(@Param("firstName") String firstName);

}
