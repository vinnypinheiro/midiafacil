import {DomainBase} from '../../utils/utils'; 

export interface ContaBancaria extends DomainBase {

  contabancaria_agencia: string;
  contabancaria_conta: string;
  contabancaria_descricao: string;
  contabancaria_inativa: boolean;
  
  unidadegestora_id :  number; 
  unidadegestora_nome :  string; 
  unidadegestora_codigo :  string;

  tipoconta_id :  number; 
  tipoconta_nome :  string; 
  tipoconta_codigo :  string;

  banco_id :  number; 
  banco_nome :  string; 
  banco_codigo :  string; 
}
