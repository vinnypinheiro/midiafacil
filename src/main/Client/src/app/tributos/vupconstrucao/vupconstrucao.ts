import {DomainBase} from '../../utils/utils'; 

export interface VupConstrucao extends DomainBase { 

     vupconstrucao_ano: number; 
     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     vupconstrucao_valor: number; 
}