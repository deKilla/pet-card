package at.fh.ima.swengs.petcard.model;

import at.fh.ima.swengs.petcard.util.JsonDateDeserializer;
import at.fh.ima.swengs.petcard.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.Date;

@Entity
public class PetDisease {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
  private Date diseaseStart;

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
  private Date diseaseEnd;

  @ManyToOne
  private Disease disease;

  @ManyToOne
  private Pet pet;

  @Version
  private long version;

  public PetDisease(){

  }

  public PetDisease(Date diseaseStart, Date diseaseEnd, Disease disease, Pet pet){
    this.diseaseStart = diseaseStart;
    this.diseaseEnd = diseaseEnd;
    this.disease = disease;
    this.pet = pet;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public Date getDiseaseStart() {
    return diseaseStart;
  }

  public void setDiseaseStart(Date diseaseStart) {
    this.diseaseStart = diseaseStart;
  }

  public Date getDiseaseEnd() {
    return diseaseEnd;
  }

  public void setDiseaseEnd(Date diseaseEnd) {
    this.diseaseEnd = diseaseEnd;
  }

  public Disease getDisease() {
    return disease;
  }

  public void setDisease(Disease disease) {
    this.disease = disease;
  }

  public Pet getPet() {
    return pet;
  }

  public void setPet(Pet pet) {
    this.pet = pet;
  }
}
