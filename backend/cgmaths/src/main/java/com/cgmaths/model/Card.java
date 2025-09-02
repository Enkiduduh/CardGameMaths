package com.cgmaths.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "code", length = 50, nullable = false)
    @NotBlank
    @Size(max = 50)
    private String code;

    @Column(name = "image_url", length = 200, nullable = false)
    private String image_url;

    @Column(name = "name_fr", length = 100, nullable = false)
    private String name_fr;

    @Column(name = "rule_fr", length = 200, nullable = false)
    private String rule_fr;

    @Column(name = "energy", nullable = false)
    @NotBlank
    private Integer energy;

    @Column(name = "cost", nullable = false)
    @NotBlank
    private Integer cost;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "type_id", nullable = false) // FK -> card_type(id)
    private CardType type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "difficulty_id", nullable = false) // FK -> difficulty_ref(id)
    private Difficulty difficulty;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false) // FK -> category_ref(id)
    private CardCategory category;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collection_id", nullable = false) // FK -> collection_ref(id)
    private CardCollection collection;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "rule_id", nullable = false) // FK -> rule_ref(id)
    private CardRule rule;

}
