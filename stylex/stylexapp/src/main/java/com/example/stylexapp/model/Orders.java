package com.example.stylexapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Orders {
    @Id
    private int id;
    private String name;
    private String email;
    private double amount;
}
