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

  private String type;

  private int weight;

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd.MM.yyyy")
  private Date birthDate;

  @ManyToOne
  private PetOwner petOwner;

  @ManyToOne
  private Doctor doctor;

  @OneToMany(mappedBy = "pet", orphanRemoval = true)
  private List<PetDisease> petDiseases;

  @OneToMany(mappedBy = "pet", orphanRemoval = true)
  private List<PetMedication> petMedications;

  @Version
  private long version;

  public Pet(){

  }

  public Pet(String name, String type, int weight, Date birthDate, List<PetDisease> petDiseases, List<PetMedication> petMedications){
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.birthDate = birthDate;
    this.petDiseases = petDiseases;
    this.petMedications = petMedications;
  }

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

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public List<PetDisease> getPetDiseases() {
    return petDiseases;
  }

  public void setPetDiseases(List<PetDisease> petDiseases) {
    this.petDiseases = petDiseases;
  }

  public List<PetMedication> getPetMedications() {
    return petMedications;
  }

  public void setPetMedications(List<PetMedication> petMedications) {
    this.petMedications = petMedications;
  }
}
