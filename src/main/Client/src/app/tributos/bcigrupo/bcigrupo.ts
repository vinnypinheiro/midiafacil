import {DomainBase} from '../../utils/utils'; 

export interface BciGrupo extends DomainBase { 

     trb_bcimodulo_id_id :  number; 
     trb_bcimodulo_id_nome :  string; 
     trb_bcimodulo_id_codigo :  string; 
     bcigrupo_codigo: string; 
     bcigrupo_nome: string; 
}