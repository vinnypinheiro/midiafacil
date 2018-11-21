import {DomainBase} from '../../utils/utils'; 

export interface Campanha extends DomainBase { 

     datafim: Date; 
     datainicio: Date; 
     nome: string; 
     cliente_id_id :  number; 
     cliente_id_nome :  string; 
     cliente_id_codigo :  string; 
}