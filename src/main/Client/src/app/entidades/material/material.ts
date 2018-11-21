import {DomainBase} from '../../utils/utils'; 

export interface Material extends DomainBase { 

     descricao: string; 
     tipo_midia_id_id :  number; 
     tipo_midia_id_nome :  string; 
     tipo_midia_id_codigo :  string; 
}