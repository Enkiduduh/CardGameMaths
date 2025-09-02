package com.cgmaths.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "rule_ref")
@Data
public class CardRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 300, nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    @Size(max = 1)
    private Integer multiplicator;

    @Column(length = 300, nullable = false, unique = true)
    private String name;
}
