package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Disease {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;

  private String description;

  @OneToMany(mappedBy = "disease", orphanRemoval = true)
  private List<PetDisease> petDiseases;

  @Version
  private long version;

  public Disease(){

  }

  public Disease(String name, String description, List<PetDisease> petDiseases){
    this.name = name;
    this.description = description;
    this.petDiseases = petDiseases;
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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public List<PetDisease> getPetDiseases() {
    return petDiseases;
  }

  public void setPetDiseases(List<PetDisease> petDiseases) {
    this.petDiseases = petDiseases;
  }
}
