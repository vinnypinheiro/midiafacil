import {DomainBase} from '../../utils/utils'; 

export interface CnaeSecundarios extends DomainBase { 

     trb_cnae_id_id :  number; 
     trb_cnae_id_nome :  string; 
     trb_cnae_id_codigo :  string; 
     trb_empresa_id_id :  number; 
     trb_empresa_id_nome :  string; 
     trb_empresa_id_codigo :  string; 
     cnaesecundarios_datainicio: Date; 
}