import {DomainBase} from '../../utils/utils'; 

export interface Habitese extends DomainBase { 

     trb_imovel_id_id :  number; 
     trb_imovel_id_nome :  string; 
     trb_imovel_id_codigo :  string; 
     habitese_datainicio: Date; 
     habitese_numero: string; 
     habitese_obs: string; 
}