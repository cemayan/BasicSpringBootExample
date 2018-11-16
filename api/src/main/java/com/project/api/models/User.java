package com.project.api.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String name;
    private String phoneNumber;
    private String address;


    public User(String name,String phoneNumber,String address){
        this.name = name;
        this.phoneNumber=phoneNumber;
        this.address=address;
    }

}