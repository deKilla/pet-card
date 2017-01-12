package at.fh.ima.swengs.petcard.model;

import at.fh.ima.swengs.petcard.util.JsonDateDeserializer;
import at.fh.ima.swengs.petcard.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Pet {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  private String name;

  private String race;

  private int weight;

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd.MM.yyyy")
  private Date birthDate;

  private PetType petType;

  @Version
  private long version;


  /*
  @OneToMany(mappedBy = "passenger",orphanRemoval = true)
  @JsonIgnoreProperties("passenger")
  private List<FlightBooking> bookings;

  disease int NOT NULL,
  medication int NOT NULL,
  petOwner int NOT NULL,
  doctor int,



  public Pet(){

  }

  public Pet(String name, String race, int weight){
    this.name = name;
    this.race = race;
    this.weight = weight;
  }
  */

}
