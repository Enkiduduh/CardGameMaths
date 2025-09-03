package com.cgmaths.repository;

import com.cgmaths.model.Card;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends JpaRepository<Card, Integer> {
    // charge les refs uniquement pour cette requête
    @EntityGraph(attributePaths = {"type", "attribute", "rule", "boost", "collection"})
    Optional<Card> findById(Integer id);

    @EntityGraph(attributePaths = {"type", "attribute", "rule", "boost", "collection"})
    @Query("select c from Card c")
    List<Card> findAllWithRefs();

    // ou, une liste paginée avec prefetch :
    @EntityGraph(attributePaths = {"type", "attribute", "rule", "boost", "collection"})
    Page<Card> findAll(Pageable pageable);

}
