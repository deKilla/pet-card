package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class PetOwner {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String firstName;

  private String lastName;

  private String address;

  private String phone;

  private String email;

  @OneToMany(mappedBy = "petOwner", orphanRemoval = true)
  private List<Pet> pets;

  @Version
  private long version;

  public PetOwner(){

  }

  public PetOwner(String firstName, String lastName, String address, String phone, String email, List<Pet> pets){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.pets = pets;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Pet> getPets() {
    return pets;
  }

  public void setPets(List<Pet> pets) {
    this.pets = pets;
  }
}
