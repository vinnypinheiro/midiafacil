import {DomainBase} from '../../utils/utils'; 

export interface Cliente extends DomainBase { 

     acessos: string; 
     alcance: string; 
     apresentador: string; 
     bairro: string; 
     banco: string; 
     bancoagencia: string; 
     bancoconta: string; 
     cidade: string; 
     cnpj: string; 
     contato: string; 
     cpf: string; 
     data_cadastro: Date; 
     email: string; 
     email1: string; 
     email2: string; 
     emailcontato: string; 
     endereco: string; 
     faixahoraria: string; 
     fax: string; 
     inscricaoestadual: string; 
     inscricaomunicipal: string; 
     nomefantasia: string; 
     obs: string; 
     razaosocial: string; 
     site: string; 
     telefone: string; 
     telefone2: string; 
     uf_id_id :  number; 
     uf_id_nome :  string; 
     uf_id_codigo :  string; 
     atividade_principal: string; 
}