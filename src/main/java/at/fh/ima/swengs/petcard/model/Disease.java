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

  @ManyToMany(cascade = CascadeType.PERSIST)
  private List<Pet> pets;

  @Version
  private long version;

  public Disease(){

  }

  public Disease(String name, String description){
    this.name = name;
    this.description = description;
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

  public List<Pet> getPets() {
    return pets;
  }

  public void setPets(List<Pet> pets) {
    this.pets = pets;
  }
}
