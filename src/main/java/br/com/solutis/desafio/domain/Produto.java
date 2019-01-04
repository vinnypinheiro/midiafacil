package br.com.solutis.desafio.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import br.com.solutis.desafio.domain.Formato;
import br.com.solutis.desafio.domain.TipoProduto;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Produto implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String descricao;

    @ManyToOne
    @JoinColumn(name = "material_id", nullable = true, foreignKey = @ForeignKey(name = "fk_produto_material"))    private Material material_id;

    @ManyToOne
    @JoinColumn(name = "tipomidia_id", nullable = true, foreignKey = @ForeignKey(name = "fk_produto_tipomidia"))    private TipoMidia tipomidia_id;


    @ManyToOne
    @JoinColumn(name = "formato_id", nullable = true, foreignKey = @ForeignKey(name = "fk_produto_formato"))    private Formato formato_id;


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


    public Material getMaterial_id() {
        return material_id;
    }

    public void setMaterial_id(Material material_id) {
        this.material_id = material_id;
    }

    public TipoMidia getTipomidia_id() {
        return tipomidia_id;
    }

    public void setTipomidia_id(TipoMidia tipomidia_id) {
        this.tipomidia_id = tipomidia_id;
    }

    public Formato getFormato_id() {
        return formato_id;
    }

    public void setFormato_id(Formato formato_id) {
        this.formato_id = formato_id;
    }
}
