import {DomainBase} from '../../utils/utils'; 

export interface Pais extends DomainBase { 

     pais_codigo: string; 
     pais_nome: string; 
     pais_sigla: string; 
     pais_sigla3: string; 
}