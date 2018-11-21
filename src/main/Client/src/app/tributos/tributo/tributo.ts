import {DomainBase} from '../../utils/utils'; 

export interface Tributo extends DomainBase { 

  tributo_codigo: string; 
  tributo_nome: string; 
  tributo_nomereduzido: string;     
  tributo_jurosreceita: string; 
  tributo_dividaativa: string; 
  tributo_jurosdividaativa: string;

  receita_id :  number;
  receita_nome :  string;
  receita_codigo :  string;
  
  bancocontrato_id :  number; 
  bancocontrato_nome :  string; 
  bancocontrato_codigo :  string; 
}
