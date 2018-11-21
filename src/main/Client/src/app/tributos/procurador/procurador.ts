import {DomainBase} from '../../utils/utils'; 

export interface Procurador extends DomainBase { 

     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     procurador_oab: string; 
}