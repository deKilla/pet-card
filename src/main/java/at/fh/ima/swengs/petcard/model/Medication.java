package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Medication {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;

  private String description;

  private float price;

  @OneToMany(mappedBy = "medication", orphanRemoval = true)
  private List<PetMedication> petMedications;

  @Version
  private long version;

  public Medication(){

  }

  public Medication(String name, String description, float price, List<PetMedication> petMedications){
    this.name = name;
    this.description = description;
    this.price = price;
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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  public List<PetMedication> getPetMedications() {
    return petMedications;
  }

  public void setPetMedications(List<PetMedication> petMedications) {
    this.petMedications = petMedications;
  }
}
