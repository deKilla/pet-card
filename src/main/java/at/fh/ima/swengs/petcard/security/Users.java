package at.fh.ima.swengs.petcard.security;

  import at.fh.ima.swengs.petcard.model.Doctor;
  import at.fh.ima.swengs.petcard.model.DoctorRepository;
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.security.core.GrantedAuthority;
  import org.springframework.security.core.authority.AuthorityUtils;
  import org.springframework.security.core.userdetails.UserDetails;
  import org.springframework.security.core.userdetails.UserDetailsService;
  import org.springframework.security.core.userdetails.UsernameNotFoundException;
  import org.springframework.security.oauth2.provider.NoSuchClientException;
  import org.springframework.stereotype.Service;

  import java.util.List;

@Service
public class Users implements UserDetailsService {

  private DoctorRepository doctorRepository;

  @Autowired
  public Users(DoctorRepository doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String email)
    throws UsernameNotFoundException {
    Doctor doctor = doctorRepository.findByEmail(email);
    if (doctor == null) {
      throw new NoSuchClientException("No Doctor found with email: " + email);
    }
    List<GrantedAuthority> auth = AuthorityUtils
      .commaSeparatedStringToAuthorityList("ROLE_USER");
    // müss ma noch schauen
    /*if (email.endsWith("@admin.pet-card.at")) {
      auth = AuthorityUtils
        .commaSeparatedStringToAuthorityList("ROLE_ADMIN");
    }*/
    String password = "test";
    return new org.springframework.security.core.userdetails.User(email, password, auth);
  }

}
