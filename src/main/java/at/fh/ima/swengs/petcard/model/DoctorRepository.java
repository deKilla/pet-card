package at.fh.ima.swengs.petcard.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {

  public Doctor findById(@Param("id") long id);

  public Doctor findByFirstName(@Param("firstName") String firstName);

  @Query(value = "SELECT d.* FROM doctor d JOIN pet p ON p.doctor_id = d.id WHERE p.id = ?1", nativeQuery = true)
  public Doctor findByPet(@Param("id") long id);

}
