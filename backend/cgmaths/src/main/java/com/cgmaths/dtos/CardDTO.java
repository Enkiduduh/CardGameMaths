package com.cgmaths.dtos;

import com.cgmaths.model.Card;

public record CardDTO(
        Integer id,
        String code,
        String image_url,
        Integer energy,
        Integer cost,
        String type,
        Integer difficulty,
        String symbol,
        String category,
        String collection,
        String name_fr,
        String rule

) {

    public static CardDTO from(Card c) {
        return new CardDTO(
                c.getId(),
                c.getCode(),
                c.getImage_url(),
                c.getEnergy(),
                c.getCost(),
                c.getType().getName(),
                c.getDifficulty().getPower(),
                c.getSymbol().getCode(),
                c.getCategory().getName(),
                c.getCollection().getName(),
                c.getName_fr(),
                c.getRule().getName()
        );
    }
}
