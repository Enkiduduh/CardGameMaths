package com.cgmaths.service;

import com.cgmaths.dtos.CardNumberDTO;
import com.cgmaths.model.CardNumber;
import com.cgmaths.repository.CardNumberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CardNumberService {

    private final CardNumberRepository cardNumberRepository;


    @Transactional
    public CardNumberDTO getCardNumber(Integer id) {
        // Choisis la méthode avec fetch (ou @EntityGraph) si tu as besoin des refs
        CardNumber c = cardNumberRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Card " + id));

        // Ici on est dans la transaction, les proxys LAZY peuvent s'initialiser
        return CardNumberDTO.from(c);
    }

    @Transactional
    public List<CardNumberDTO> getAllCards() {
        var cards = cardNumberRepository.findAllWithRefs(); // Récupère toutes les cartes
        return cards.stream()
                .map(c -> CardNumberDTO.from(c)
                ).toList();
    }

    @Transactional
    public List<CardNumberDTO> getShuffledCards() {
        var list = new ArrayList<>(
                cardNumberRepository.findAllWithRefs()
                        .stream()
                        .map(c -> CardNumberDTO.from(c)
                        ).toList()
        );
        Collections.shuffle(list);

        int limit = Math.min(20, list.size());
        return list.subList(0, limit);

    }
}
