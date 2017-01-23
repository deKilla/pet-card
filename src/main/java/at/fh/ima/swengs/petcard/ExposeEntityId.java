package at.fh.ima.swengs.petcard;

import at.fh.ima.swengs.petcard.model.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class ExposeEntityId extends RepositoryRestConfigurerAdapter{

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
      config.exposeIdsFor(Pet.class);
      config.exposeIdsFor(Disease.class);
      config.exposeIdsFor(Doctor.class);
      config.exposeIdsFor(Medication.class);
      config.exposeIdsFor(PetDisease.class);
      config.exposeIdsFor(PetMedication.class);
      config.exposeIdsFor(PetOwner.class);
    }
}
