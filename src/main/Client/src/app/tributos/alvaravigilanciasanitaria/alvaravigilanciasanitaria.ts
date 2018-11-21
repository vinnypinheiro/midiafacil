import {DomainBase} from '../../utils/utils'; 

export interface AlvaraVigilanciaSanitaria extends DomainBase { 

     alvaravigilanciasanitaria_datainicio: Date; 
     alvaravigilanciasanitaria_datafim: Date; 
     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     trb_responsavellegal_id_id :  number; 
     trb_responsavellegal_id_nome :  string; 
     trb_responsavellegal_id_codigo :  string; 
     trb_alvaramotivostatus_id_id :  number; 
     trb_alvaramotivostatus_id_nome :  string; 
     trb_alvaramotivostatus_id_codigo :  string; 
     alvaravigilanciasanitaria_numero: string; 
     alvaravigilanciasanitaria_hashcontrol: string; 
     alvaravigilanciasanitaria_obs: string; 
}