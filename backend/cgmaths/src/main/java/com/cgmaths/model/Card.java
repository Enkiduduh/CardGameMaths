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

    @Column(name = "cost", nullable = false)
    @NotBlank
    private Integer cost;

    @Column(name = "multiplicator", nullable = false)
    @NotBlank
    private Integer multiplicator;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "type_id", nullable = false) // FK -> card_type(id)
    private CardType type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "attribute_id", nullable = false) // FK -> attribute_ref(id)
    private Attribute attribute;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collection_id", nullable = false) // FK -> collection_ref(id)
    private CardCollection collection;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "boost_id", nullable = false) // FK -> boost_ref(id)
    private Boost boost;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "rule_id", nullable = false) // FK -> rule_ref(id)
    private Rule rule;
}
