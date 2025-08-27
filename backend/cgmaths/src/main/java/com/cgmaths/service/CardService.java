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

        // Ici on est dans la transaction, les proxys LAZY peuvent s'initialiser
        return CardDTO.from(c);
    }

    @Transactional
    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }
}
