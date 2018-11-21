import {DomainBase} from '../../utils/utils'; 

export interface CnaeLicenca extends DomainBase { 

     trb_cnae_id_id :  number; 
     trb_cnae_id_nome :  string; 
     trb_cnae_id_codigo :  string; 
     cnaelicenca_vigilanciasanitaria: boolean; 
     cnaelicenca_bombeiro: boolean; 
     cnaelicenca_meioambiente: boolean; 
}