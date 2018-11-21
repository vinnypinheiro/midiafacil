import {DomainBase} from '../../utils/utils'; 

export interface Loteamento extends DomainBase { 

     loteamento_datacadastro: Date; 
     loteamento_codigo: string; 
     loteamento_nome: string; 
     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     loteamento_quantidadeunidades: number; 
     loteamento_areagleba: number; 
     loteamento_areapreservacao: number; 
     loteamento_areatotal: number; 
     trb_bairro_id_id :  number; 
     trb_bairro_id_nome :  string; 
     trb_bairro_id_codigo :  string; 
     trb_logradouro_id_id :  number; 
     trb_logradouro_id_nome :  string; 
     trb_logradouro_id_codigo :  string; 
}