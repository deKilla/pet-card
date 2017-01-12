package at.fh.ima.swengs.petcard.model;

import javax.persistence.*;

@Entity
public class PetType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private String description;

    @Version
    private long version;
}
