package com.cgmaths.repository;

import com.cgmaths.model.Card;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardRepository extends JpaRepository<Card, Integer> {
    // charge les refs uniquement pour cette requête
    @EntityGraph(attributePaths = {"type","rarity","symbol","category","collection"})
    Optional<Card> findById(Integer id);

    // ou, une liste paginée avec prefetch :
    @EntityGraph(attributePaths = {"type","rarity"})
    Page<Card> findAll(Pageable pageable);

}
