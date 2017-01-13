package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Doctor {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String firstName;

  private String lastName;

  private String address;

  private String phone;

  private String email;

  private String officeHours;

  @OneToMany(mappedBy = "doctor", orphanRemoval = true)
  private List<Pet> pets;

  @Version
  private long version;

  public Doctor(){

  }

  public Doctor (String firstName, String lastName, String address, String phone, String email, String officeHours){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.officeHours = officeHours;
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

  public String getOfficeHours() {
    return officeHours;
  }

  public void setOfficeHours(String officeHours) {
    this.officeHours = officeHours;
  }

  public List<Pet> getPets() {
    return pets;
  }

  public void setPets(List<Pet> pets) {
    this.pets = pets;
  }
}
