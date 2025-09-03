package com.cgmaths.service;

import com.cgmaths.dtos.CardDTO;
import com.cgmaths.model.Card;
import com.cgmaths.repository.CardRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;


    @Transactional
    public CardDTO getCard(Integer id) {
        // Choisis la méthode avec fetch (ou @EntityGraph) si tu as besoin des refs
        Card c = cardRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Card " + id));

        String tpl = c.getRule().getName(); // ex: "... {multiplicator} ..."
        String renderedRule = tpl.replace("{multiplicator}", String.valueOf(c.getMultiplicator()));

        // Ici on est dans la transaction, les proxys LAZY peuvent s'initialiser
        return CardDTO.from(c);
    }

    @Transactional
    public List<CardDTO> getAllCards() {
        var cards = cardRepository.findAllWithRefs(); // Récupère toutes les cartes
        return cards.stream()
                .map(c -> CardDTO.from(c)
                ).toList();
    }
}
