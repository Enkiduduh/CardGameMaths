package com.cgmaths.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "collection_ref")
@Data
public class CardCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 32, nullable = false, unique = true)
    private String name;
}
