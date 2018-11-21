import {DomainBase} from '../../utils/utils'; 

export interface Iss extends DomainBase { 

     iss_trb_referencia_id: number; 
     iss_tipoinscricao: string; 
     iss_datalancamento: Date; 
     iss_ano: number; 
     iss_aliquota: number; 
     iss_aliquotareferencia: number; 
     iss_basecalculo: number; 
     iss_qtdparcela: number; 
     iss_valor: number; 
     iss_valorparcela: number; 
     iss_numero: number; 
     iss_obs: string; 
}