package com.cgmaths.repository;

import com.cgmaths.model.CardNumber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardNumberRepository extends JpaRepository<CardNumber, Integer> {
    // charge les refs uniquement pour cette requête
    @EntityGraph(attributePaths = {"type", "collection"})
    Optional<CardNumber> findById(Integer id);

    @EntityGraph(attributePaths = {"type", "collection"})
    @Query("select c from CardNumber c")
    List<CardNumber> findAllWithRefs();

    // ou, une liste paginée avec prefetch :
    @EntityGraph(attributePaths = {"type", "collection"})
    Page<CardNumber> findAll(Pageable pageable);

}
