import {DomainBase} from '../../utils/utils'; 

export interface Baixa extends DomainBase { 

     baixa_datacredito: Date; 
     trb_tipobaixa_id_id :  number; 
     trb_tipobaixa_id_nome :  string; 
     trb_tipobaixa_id_codigo :  string; 
     trb_baixastatus_id_id :  number; 
     trb_baixastatus_id_nome :  string; 
     trb_baixastatus_id_codigo :  string; 
     trb_contabancaria_id_id :  number; 
     trb_contabancaria_id_nome :  string; 
     trb_contabancaria_id_codigo :  string; 
     trb_receita_id_id :  number; 
     trb_receita_id_nome :  string; 
     trb_receita_id_codigo :  string; 
     trb_debitoparcela_id_id :  number; 
     trb_debitoparcela_id_nome :  string; 
     trb_debitoparcela_id_codigo :  string; 
     trb_creditobancarioitem_id_id :  number; 
     trb_creditobancarioitem_id_nome :  string; 
     trb_creditobancarioitem_id_codigo :  string; 
     trb_emissaocobrancaitem_id_id :  number; 
     trb_emissaocobrancaitem_id_nome :  string; 
     trb_emissaocobrancaitem_id_codigo :  string; 
     baixa_valoremissao: number; 
     baixa_valororiginal: number; 
     baixa_juros: number; 
     baixa_multa: number; 
     baixa_correcao: number; 
     baixa_desconto: number; 
     baixa_honorarioadvocaticio: number; 
     baixa_valorrecebido: number; 
     baixa_morasbancarias: number; 
     baixa_jurosreceita: string; 
     baixa_jurosdividaativa: string; 
     baixa_obs: string; 
}