import {DomainBase} from '../../utils/utils'; 

export interface Programa extends DomainBase { 

     descricao: string; 
     horario: string; 
     veiculo_id_id :  number; 
     veiculo_id_nome :  string; 
     veiculo_id_codigo :  string; 
}