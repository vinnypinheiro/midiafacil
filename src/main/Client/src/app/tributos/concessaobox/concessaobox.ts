import {DomainBase} from '../../utils/utils'; 

export interface ConcessaoBox extends DomainBase { 

     concessaobox_barraca: string; 
     concessaobox_localizacao: string; 
     concessaobox_numerobarraca: string; 
     concessaobox_produtos: string; 
     trb_localconcessaobox_id_id :  number; 
     trb_localconcessaobox_id_nome :  string; 
     trb_localconcessaobox_id_codigo :  string; 
}