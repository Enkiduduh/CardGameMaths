package com.cgmaths.dtos;

import com.cgmaths.model.Card;
import com.cgmaths.model.CardType;

public record CardDTO(
        Integer id,
        String code,
        String image_url,
        String name,
        Integer cost,
        Integer multiplicator,
        String card_type,
        String rule,
        String attribute,
        String boost,
        String collection
) {

    public static CardDTO from(Card c) {
        String renderedRule = c.getRule().getName()
                .replace("{multiplicator}", String.valueOf(c.getMultiplicator()));

        return new CardDTO(
                c.getId(),
                c.getCode(),
                c.getImage_url(),
                c.getName_fr(),
                c.getCost(),
                c.getMultiplicator(),
                c.getType().getName(),
                renderedRule,
                c.getAttribute().getName(),
                c.getBoost().getName(),
                c.getCollection().getName()
        );
    }
}
