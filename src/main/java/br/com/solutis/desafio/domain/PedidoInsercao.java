package br.com.solutis.desafio.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PedidoInsercao implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private Date dataemissao;
    private String status;
    private String periodo;
    private String osagencia;
    private Double totalbruto;
    private Double comissao;
    private Double totalliquido;

    private String vencimentotxt;
    private String faturamentotxt;
    private String praca;


    private String codigo;
    private String informacoesimportantes;
    private String obs;

    @ManyToOne
    @JoinColumn(name = "agencia_id", nullable = true, foreignKey = @ForeignKey(name = "fk_pedidoinsercao_agencia"))    private Agencia agencia_id;

    @ManyToOne
    @JoinColumn(name = "planomidia_id", nullable = true, foreignKey = @ForeignKey(name = "fk_pedidoinsercao_planomidia"))    private PlanoMidia planomidia_id;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = true, foreignKey = @ForeignKey(name = "fk_pedidoinsercao_cliente"))    private Cliente cliente_id;

    @ManyToOne
    @JoinColumn(name = "veiculo_id", nullable = true, foreignKey = @ForeignKey(name = "fk_pedidoinsercao_veiculo"))    private Veiculo veiculo_id;

    @JsonManagedReference(value="peca-pedidoinsercao")
    @OneToMany(mappedBy = "pedidoinsercao_id", orphanRemoval = false, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Peca> pecaList = new ArrayList<>();

    @JsonManagedReference(value="pedidoinsercaoitem-pedidoinsercao")
    @OneToMany(mappedBy = "pedidoinsercao_id", orphanRemoval = false, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<PedidoInsercaoItem> pedidoinsercaoitemList = new ArrayList<>();

 public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    public String getInformacoesimportantes() {
        return informacoesimportantes;
    }

    public void setInformacoesimportantes(String informacoesimportantes) {
        this.informacoesimportantes = informacoesimportantes;
    }
    public String getObs() {
        return obs;
    }

    public void setObs(String obs) {
        this.obs = obs;
    }

    public Agencia getAgencia_id() {
        return agencia_id;
    }

    public void setAgencia_id(Agencia agencia_id) {
        this.agencia_id = agencia_id;
    }
    public Cliente getCliente_id() {
        return cliente_id;
    }

    public void setCliente_id(Cliente cliente_id) {
        this.cliente_id = cliente_id;
    }

    public Veiculo getVeiculo_id() {
        return veiculo_id;
    }

    public void setVeiculo_id(Veiculo veiculo_id) {
        this.veiculo_id = veiculo_id;
    }

    public Date getDataemissao() {
        return dataemissao;
    }

    public void setDataemissao(Date dataemissao) {
        this.dataemissao = dataemissao;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public String getOsagencia() {
        return osagencia;
    }

    public void setOsagencia(String osagencia) {
        this.osagencia = osagencia;
    }

    public Double getTotalbruto() {
        return totalbruto;
    }

    public void setTotalbruto(Double totalbruto) {
        this.totalbruto = totalbruto;
    }

    public Double getComissao() {
        return comissao;
    }

    public void setComissao(Double comissao) {
        this.comissao = comissao;
    }

    public Double getTotalliquido() {
        return totalliquido;
    }

    public void setTotalliquido(Double totalliquido) {
        this.totalliquido = totalliquido;
    }

    public String getVencimentotxt() {
        return vencimentotxt;
    }

    public void setVencimentotxt(String vencimentotxt) {
        this.vencimentotxt = vencimentotxt;
    }

    public String getFaturamentotxt() {
        return faturamentotxt;
    }

    public void setFaturamentotxt(String faturamentotxt) {
        this.faturamentotxt = faturamentotxt;
    }

    public String getPraca() {
        return praca;
    }

    public void setPraca(String praca) {
        this.praca = praca;
    }

    public List<Peca> getPecaList() {
        return pecaList;
    }

    public void setPecaList(List<Peca> pecaList) {
        this.pecaList = pecaList;
    }

    public List<PedidoInsercaoItem> getPedidoinsercaoitemList() {
        return pedidoinsercaoitemList;
    }

    public void setPedidoinsercaoitemList(List<PedidoInsercaoItem> pedidoinsercaoitemList) {
        this.pedidoinsercaoitemList = pedidoinsercaoitemList;
    }

    public PlanoMidia getPlanomidia_id() {
        return planomidia_id;
    }

    public void setPlanomidia_id(PlanoMidia planomidia_id) {
        this.planomidia_id = planomidia_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
