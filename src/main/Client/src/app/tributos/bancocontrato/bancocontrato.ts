import {DomainBase} from '../../utils/utils'; 

export interface BancoContrato extends DomainBase {

  bancocontrato_carteira: string;
  bancocontrato_numero: string;
  bancocontrato_descricao: string;
  
  tipobancocontrato_id :  number; 
  tipobancocontrato_nome :  string; 
  tipobancocontrato_codigo :  string;
  
  contabancaria_id :  number; 
  contabancaria_nome :  string; 
  contabancaria_codigo :  string;
     
}
