package at.fh.ima.swengs.petcard;

import at.fh.ima.swengs.petcard.model.Pet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//@SpringBootApplication
@SpringBootApplication
public class PetCardApplication {

	public static void main(String[] args) {SpringApplication.run(PetCardApplication.class, args);
	}

  // hebelt die nervige Passwortabfrage aus für die ich den Zugang net kenne
  @Configuration
  @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
  public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
      auth.inMemoryAuthentication()
        .withUser("fuchs").password("password").roles("USER");
    }
  }

  @Configuration
  public class ExposeIDs extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
      config.exposeIdsFor(Pet.class);
    }
  }


}
