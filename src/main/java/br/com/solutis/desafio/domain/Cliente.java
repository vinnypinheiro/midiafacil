package br.com.solutis.desafio.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import br.com.solutis.desafio.domain.Uf;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Cliente implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String acessos;
    private String alcance;
    private String apresentador;
    private String bairro;
    private String banco;
    private String bancoagencia;
    private String bancoconta;
    private String cidade;
    private String cnpj;
    private String contato;
    private String cpf;
    private Instant data_cadastro;
    private String email;
    private String email1;
    private String email2;
    private String emailcontato;
    private String endereco;
    private String faixahoraria;
    private String fax;
    private String inscricaoestadual;
    private String inscricaomunicipal;
    private String nomefantasia;
    private String obs;
    private String razaosocial;
    private String site;
    private String telefone;
    private String telefone2;
    @ManyToOne
    @JoinColumn(name = "uf_id", nullable = true, foreignKey = @ForeignKey(name = "fk_cliente_uf"))    private Uf uf_id;
    private String atividade_principal;

 public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }    public String getAcessos() {
        return acessos;
    }

    public void setAcessos(String acessos) {
        this.acessos = acessos;
    }
    public String getAlcance() {
        return alcance;
    }

    public void setAlcance(String alcance) {
        this.alcance = alcance;
    }
    public String getApresentador() {
        return apresentador;
    }

    public void setApresentador(String apresentador) {
        this.apresentador = apresentador;
    }
    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }
    public String getBancoagencia() {
        return bancoagencia;
    }

    public void setBancoagencia(String bancoagencia) {
        this.bancoagencia = bancoagencia;
    }
    public String getBancoconta() {
        return bancoconta;
    }

    public void setBancoconta(String bancoconta) {
        this.bancoconta = bancoconta;
    }
    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public Instant getData_cadastro() {
        return data_cadastro;
    }

    public void setData_cadastro(Instant data_cadastro) {
        this.data_cadastro = data_cadastro;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail1() {
        return email1;
    }

    public void setEmail1(String email1) {
        this.email1 = email1;
    }
    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }
    public String getEmailcontato() {
        return emailcontato;
    }

    public void setEmailcontato(String emailcontato) {
        this.emailcontato = emailcontato;
    }
    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getFaixahoraria() {
        return faixahoraria;
    }

    public void setFaixahoraria(String faixahoraria) {
        this.faixahoraria = faixahoraria;
    }
    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }
    public String getInscricaoestadual() {
        return inscricaoestadual;
    }

    public void setInscricaoestadual(String inscricaoestadual) {
        this.inscricaoestadual = inscricaoestadual;
    }
    public String getInscricaomunicipal() {
        return inscricaomunicipal;
    }

    public void setInscricaomunicipal(String inscricaomunicipal) {
        this.inscricaomunicipal = inscricaomunicipal;
    }
    public String getNomefantasia() {
        return nomefantasia;
    }

    public void setNomefantasia(String nomefantasia) {
        this.nomefantasia = nomefantasia;
    }
    public String getObs() {
        return obs;
    }

    public void setObs(String obs) {
        this.obs = obs;
    }
    public String getRazaosocial() {
        return razaosocial;
    }

    public void setRazaosocial(String razaosocial) {
        this.razaosocial = razaosocial;
    }
    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }
    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public String getTelefone2() {
        return telefone2;
    }

    public void setTelefone2(String telefone2) {
        this.telefone2 = telefone2;
    }
    public Uf getUf_id() {
        return uf_id;
    }

    public void setUf_id(Uf uf_id) {
        this.uf_id = uf_id;
    }
    public String getAtividade_principal() {
        return atividade_principal;
    }

    public void setAtividade_principal(String atividade_principal) {
        this.atividade_principal = atividade_principal;
    }
}
