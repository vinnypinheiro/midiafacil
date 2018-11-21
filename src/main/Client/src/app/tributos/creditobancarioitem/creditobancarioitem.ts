import {DomainBase} from '../../utils/utils'; 

export interface CreditoBancarioItem extends DomainBase { 

     trb_creditobancario_id_id :  number; 
     trb_creditobancario_id_nome :  string; 
     trb_creditobancario_id_codigo :  string; 
     trb_cobrancabancariastatus_id_id :  number; 
     trb_cobrancabancariastatus_id_nome :  string; 
     trb_cobrancabancariastatus_id_codigo :  string; 
     creditobancarioitem_registro: number; 
     creditobancarioitem_bancoarrecadador: number; 
     creditobancarioitem_nossonumero: string; 
     creditobancarioitem_datacredito: Date; 
     creditobancarioitem_datapagamento: Date; 
     creditobancarioitem_datavencimento: Date; 
     creditobancarioitem_valororiginal: number; 
     creditobancarioitem_valortarifa: number; 
     creditobancarioitem_valorrecebido: number; 
     creditobancarioitem_juros: number; 
     creditobancarioitem_multa: number; 
     creditobancarioitem_correcao: number; 
     creditobancarioitem_desconto: number; 
     creditobancarioitem_detalhes: string; 
}