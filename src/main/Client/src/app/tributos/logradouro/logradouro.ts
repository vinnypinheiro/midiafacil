import {DomainBase} from '../../utils/utils'; 

export interface Logradouro extends DomainBase { 

     trb_tipologradouro_id_id :  number; 
     trb_tipologradouro_id_nome :  string; 
     trb_tipologradouro_id_codigo :  string; 
     logradouro_codigo: string; 
     logradouro_nome: string; 
     logradouro_numerodecreto: string; 
     logradouro_nomeanterior: string; 
     logradouro_nomepopular: string; 
     logradouro_datacadastro: Date; 
}