package com.cgmaths.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Entity
@Data
@Table(name = "symbol_ref")
public class SymbolRef {
    @Id
    @Column(length = 1)   // correspond à CHAR(1)
    private String code;

    @Column(length = 32, nullable = false, unique = true)
    private String label;
}
