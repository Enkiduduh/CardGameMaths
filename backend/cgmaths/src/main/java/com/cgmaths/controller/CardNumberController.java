package com.cgmaths.controller;

import com.cgmaths.dtos.CardNumberDTO;
import com.cgmaths.service.CardNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CardNumberController {
    @Autowired
    CardNumberService cardNumberService;

    @GetMapping("/cards/numbers")
    public List<CardNumberDTO> getAllCards() {
        return cardNumberService.getAllCards();
    }

    @GetMapping("/cards/numbers/{id}")
    public CardNumberDTO displayCard(@PathVariable Integer id) {
        return cardNumberService.getCardNumber(id);
    }

    @GetMapping("/cards/numbers/deckready")
    public List<CardNumberDTO> getShuffledCards() {
        return cardNumberService.getShuffledCards();
    }
}
