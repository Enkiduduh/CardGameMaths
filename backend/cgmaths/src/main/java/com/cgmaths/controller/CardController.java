package com.cgmaths.controller;

import com.cgmaths.dtos.CardDTO;
import com.cgmaths.model.Card;
import com.cgmaths.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CardController {
    @Autowired
    CardService cardService;

    @GetMapping("/cards")
    public List<Card> getAllCards() {
        return cardService.getAllCards();
    }

    @GetMapping("/cards/{id}")
    public CardDTO displayCard(@PathVariable Integer id) {
        return cardService.getCard(id);
    }

}
