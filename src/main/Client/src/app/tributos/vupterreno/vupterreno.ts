import {DomainBase} from '../../utils/utils'; 

export interface VupTerreno extends DomainBase { 

     vupterreno_ano: number; 
     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     trb_logradourosegmento_id_id :  number; 
     trb_logradourosegmento_id_nome :  string; 
     trb_logradourosegmento_id_codigo :  string; 
     vupterreno_valor: number; 
}