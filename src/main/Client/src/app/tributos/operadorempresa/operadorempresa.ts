import {DomainBase} from '../../utils/utils'; 

export interface OperadorEmpresa extends DomainBase { 

     
  operadorempresa_senha: string; 
  operadorempresa_datacadastro: Date; 
  operadorempresa_datavalidade: Date; 
  operadorempresa_ativo: boolean;      
  operadorempresa_nome: string; 
  operadorempresa_rg: string; 
  operadorempresa_cnpjcpf: string; 
  operadorempresa_nit: string; 
  operadorempresa_email: string; 
  operadorempresa_datalancamento: Date; 
  operadorempresa_telefonefixo: string; 
  operadorempresa_telefonemovel: string;      
  operadorempresa_logradouro: string; 
  operadorempresa_numero: string; 
  operadorempresa_complemento: string; 
  operadorempresa_bairro: string;      
  operadorempresa_cep: string;

  tipooperador_id :  number;
  tipooperador_nome :  string;
  tipooperador_codigo :  string;
  
  empresa_id :  number;
  empresa_nome :  string;
  empresa_codigo :  string;

  nacionalidade_id :  number;
  nacionalidade_nome :  string;
  nacionalidade_codigo :  string;
  
  naturezajuridica_id :  number;
  naturezajuridica_nome :  string;
  naturezajuridica_codigo :  string;

  tipologradouro_id :  number;
  tipologradouro_nome :  string;
  tipologradouro_codigo :  string;

  logradouro_id :  number;
  logradouro_nome :  string;
  logradouro_codigo :  string;

  bairro_id :  number;
  bairro_nome :  string;
  bairro_codigo :  string;

  cidade_id :  number;
  cidade_nome :  string;
  cidade_codigo :  string;
}
