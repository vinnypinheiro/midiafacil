import {DomainBase} from '../../utils/utils'; 

export interface TxMercado extends DomainBase { 

     txmercado_trb_referencia_id: number; 
     txmercado_datalancamento: Date; 
     txmercado_ano: number; 
     txmercado_basecalculo: number; 
     txmercado_aliquota: number; 
     txmercado_aliquotareferencia: number; 
     txmercado_qtdparcela: number; 
     txmercado_valorparcela: number; 
     txmercado_valor: number; 
     txmercado_numero: number; 
     txmercado_obs: string; 
}