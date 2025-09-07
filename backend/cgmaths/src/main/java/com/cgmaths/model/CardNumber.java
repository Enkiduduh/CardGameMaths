package com.cgmaths.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "card_number")
public class CardNumber {
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

    @Column(name = "value_nb", nullable = false)
    @NotBlank
    @Size(max = 5)
    private Integer value_nb;

    @Column(name = "cost", nullable = false)
    @NotBlank
    private Integer cost;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "type_id", nullable = false) // FK -> card_type(id)
    private CardType type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collection_id", nullable = false) // FK -> collection_ref(id)
    private CardCollection collection;

}
