import {DomainBase} from '../../utils/utils'; 

export interface CalendarioFiscal extends DomainBase { 

     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     calendariofiscal_ano: number; 
     calendariofiscal_datalimite: Date; 
     calendariofiscal_datavencimento: Date; 
     calendariofiscal_parcela: number; 
     calendariofiscal_obs: string; 
}