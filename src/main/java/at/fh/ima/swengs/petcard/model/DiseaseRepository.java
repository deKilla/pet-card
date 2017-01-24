package at.fh.ima.swengs.petcard.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


public interface DiseaseRepository extends PagingAndSortingRepository<Disease, Long> {

  public Disease findById(@Param("id") long id);

}
