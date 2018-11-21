import {DomainBase} from '../../utils/utils'; 

export interface Contribuinte extends DomainBase { 

  contribuinte_nome: string;
  contribuinte_rg: string;
  contribuinte_cnpjcpf: string;
  contribuinte_nit: string;
  contribuinte_email: string;
  contribuinte_datalancamento: Date;
  contribuinte_telefonefixo: string;
  contribuinte_telefonemovel: string;
  contribuinte_cep: string;
  contribuinte_bairro: string;
  contribuinte_logradouro: string;
  contribuinte_numero: string;
  contribuinte_complemento: string;

  naturezajuridica_id: number,
  naturezajuridica_nome: string,
  naturezajuridica_codigo: string,

  pais_id: number,
  pais_nome: string,
  pais_codigo: string,

  cidade_id: number,
  cidade_nome: string,
  cidade_codigo: string,

  bairro_id: number,
  bairro_nome: string,
  bairro_codigo: string,

  tipologradouro_id: number,
  tipologradouro_nome: string,
  tipologradouro_codigo: string,

  logradouro_id: number,
  logradouro_nome: string,
  logradouro_codigo: string,
}
