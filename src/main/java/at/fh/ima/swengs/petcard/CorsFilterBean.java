package at.fh.ima.swengs.petcard;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

/**
 * Created by simon41 on 12/18/2016.
 */
//http://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/cors/CorsConfiguration.html#setAllowedMethods-java.util.List-

@Configuration
public class CorsFilterBean {

  @Bean
  public FilterRegistrationBean corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.addAllowedOrigin("*");
    config.setAllowedMethods(Arrays.asList("OPTIONS", "GET", "POST", "PUT", "DELETE"));
    config.addAllowedHeader("*");
//            config.addAllowedMethod("*");
    source.registerCorsConfiguration("/**", config);
    FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
    bean.setOrder(0);
    return bean;
  }
}
