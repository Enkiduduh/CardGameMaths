package com.cgmaths.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "card_type")
public class CardType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", length = 100, nullable = false, unique = true)
    @NotBlank
    private String name;

    @Column(name = "attribut", length = 32, unique = true)
    @NotBlank
    private String attribut;

    @Column(name = "boost", length = 16, nullable = false, unique = true)
    @NotBlank
    private String boost;

    @Column(name = "multiplicator", nullable = false, unique = true)
    @Size(max = 1)
    private String multiplicator;

}
