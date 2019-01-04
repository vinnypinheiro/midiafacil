package br.com.solutis.desafio.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import br.com.solutis.desafio.domain.Material;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TipoMidia implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String nome;


 public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
