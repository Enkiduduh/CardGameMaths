package com.cgmaths.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "attribute_ref")
@Data
public class Attribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 16, nullable = false, unique = true)
    private String name;
}
