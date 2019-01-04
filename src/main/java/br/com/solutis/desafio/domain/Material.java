package br.com.solutis.desafio.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import br.com.solutis.desafio.domain.TipoMidia;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Material implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String descricao;

    @JsonManagedReference(value="material-formato")
    @OneToMany(mappedBy = "material_id", orphanRemoval = false, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Formato> formatolist = new ArrayList<>();

 public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Formato> getFormatolist() {
        return formatolist;
    }

    public void setFormatolist(List<Formato> formatolist) {
        this.formatolist = formatolist;
    }
}
