package com.cgmaths.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "difficulty_ref")
public class Difficulty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "power", nullable = false, unique = true)
    @NotBlank
    @Size(max = 1)
    private Integer power;
}
