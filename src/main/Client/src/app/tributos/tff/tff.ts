import {DomainBase} from '../../utils/utils'; 

export interface Tff extends DomainBase { 

     trb_empresa_id_id :  number; 
     trb_empresa_id_nome :  string; 
     trb_empresa_id_codigo :  string; 
     trb_porteempresa_id_id :  number; 
     trb_porteempresa_id_nome :  string; 
     trb_porteempresa_id_codigo :  string; 
     trb_simplesnacional_id_id :  number; 
     trb_simplesnacional_id_nome :  string; 
     trb_simplesnacional_id_codigo :  string; 
     trb_declaracaofiscal_id_id :  number; 
     trb_declaracaofiscal_id_nome :  string; 
     trb_declaracaofiscal_id_codigo :  string; 
     tff_datalancamento: Date; 
     tff_aliquota: number; 
     tff_aliquotareferencia: number; 
     tff_basecalculo: number; 
     tff_ano: number; 
     tff_qtdparcela: number; 
     tff_valorparcela: number; 
     tff_valor: number; 
     tff_numero: number; 
     tff_obs: string; 
}