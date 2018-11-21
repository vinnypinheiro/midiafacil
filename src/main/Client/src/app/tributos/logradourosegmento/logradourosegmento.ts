import {DomainBase} from '../../utils/utils'; 

export interface LogradouroSegmento extends DomainBase { 

     logradourosegmento_codigo: string; 
     logradourosegmento_lado: string; 
     trb_bairro_id_id :  number; 
     trb_bairro_id_nome :  string; 
     trb_bairro_id_codigo :  string; 
     trb_logradouro_id_id :  number; 
     trb_logradouro_id_nome :  string; 
     trb_logradouro_id_codigo :  string; 
     logradourosegmento_cep: string; 
}