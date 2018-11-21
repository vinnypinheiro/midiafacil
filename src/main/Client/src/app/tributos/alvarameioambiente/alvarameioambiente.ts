import {DomainBase} from '../../utils/utils'; 

export interface AlvaraMeioAmbiente extends DomainBase { 

     alvarameioambiente_datainicio: Date; 
     alvarameioambiente_datafim: Date; 
     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     trb_alvaramotivostatus_id_id :  number; 
     trb_alvaramotivostatus_id_nome :  string; 
     trb_alvaramotivostatus_id_codigo :  string; 
     alvarameioambiente_numero: string; 
     alvarameioambiente_hashcontrol: string; 
     alvarameioambiente_obs: string; 
}