package at.fh.ima.swengs.petcard.model;

import at.fh.ima.swengs.petcard.util.JsonDateDeserializer;
import at.fh.ima.swengs.petcard.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Pet {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;

  private String race;

  private int weight;

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd.MM.yyyy")
  private Date birthDate;

  @ManyToOne
  private PetType petType;

  @ManyToOne
  private PetOwner petOwner;

  @ManyToOne
  private Doctor doctor;

  @ManyToMany(mappedBy = "pet")
  private List<Disease> diseases;

  @ManyToMany(mappedBy = "pet")
  private List<Medication> medications;

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
  public long getId() {
    return id;
  }

  public void setId(long id) {
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

  public PetType getPetType() {
    return petType;
  }

  public void setPetType(PetType petType) {
    this.petType = petType;
  }

  public PetOwner getPetOwner() {
    return petOwner;
  }

  public void setPetOwner(PetOwner petOwner) {
    this.petOwner = petOwner;
  }

  public Doctor getDoctor() {
    return doctor;
  }

  public void setDoctor(Doctor doctor) {
    this.doctor = doctor;
  }

  public List<Disease> getDiseases() {
    return diseases;
  }

  public void setDiseases(List<Disease> diseases) {
    this.diseases = diseases;
  }

  public List<Medication> getMedications() {
    return medications;
  }

  public void setMedications(List<Medication> medications) {
    this.medications = medications;
  }
}
