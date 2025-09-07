package com.cgmaths.dtos;

import com.cgmaths.model.CardNumber;

public record CardNumberDTO(
        Integer id,
        String code,
        String image_url,
        String name,
        Integer value_nb,
        Integer cost,
        String card_type,
        String collection
) {

    public static CardNumberDTO from(CardNumber c) {
        return new CardNumberDTO(
                c.getId(),
                c.getCode(),
                c.getImage_url(),
                c.getName_fr(),
                c.getCost(),
                c.getValue_nb(),
                c.getType().getName(),
                c.getCollection().getName()
        );
    }
}
