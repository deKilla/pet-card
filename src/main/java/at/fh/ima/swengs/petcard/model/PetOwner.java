package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;

@Entity
public class PetOwner {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  private String firstName;

  private String lastName;

  private String address;

  private String phone;

  private String email;

  private Pet pet;

  @Version
  private long version;

  public PetOwner(){

  }

  public PetOwner(String firstName, String lastName, String address, String phone, String email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
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
}
