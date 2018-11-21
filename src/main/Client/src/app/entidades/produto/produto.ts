import {DomainBase} from '../../utils/utils'; 

export interface Produto extends DomainBase { 

     descricao: string; 
     midia: string; 
     preco: number; 
     formato_id_id :  number; 
     formato_id_nome :  string; 
     formato_id_codigo :  string; 
     tipoproduto_id_id :  number; 
     tipoproduto_id_nome :  string; 
     tipoproduto_id_codigo :  string; 
}