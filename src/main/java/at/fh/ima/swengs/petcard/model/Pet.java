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

  //Beziehungen
  private PetType petType;

  private Disease disease;

  private PetOwner petOwner;

  private Doctor doctor;

  @Version
  private long version;

  public Pet(){

  }

  //Um Beziehungsparameter erweitern
  public Pet(String name, String race, int weight, Date birthDate){
    this.name = name;
    this.race = race;
    this.weight = weight;
    this.birthDate = birthDate;
  }

  //Um Beziehungsparameter
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getRace() {
    return race;
  }

  public void setRace(String race) {
    this.race = race;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public Date getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
  }
}
