import {DomainBase} from '../../utils/utils'; 

export interface Receita extends DomainBase { 

     receita_codigo: string; 
     receita_nome: string; 
     receita_obs: string; 
}