import {DomainBase} from '../../utils/utils'; 

export interface NotaFiscalAvulsa extends DomainBase { 

  notafiscalavulsa_datalancamento: Date; 
  notafiscalavulsa_dataoperacao: Date; 
  notafiscalavulsa_datastatus: Date; 
  notafiscalavulsa_competencia: string;      
  notafiscalavulsa_destinatarionome: string; 
  notafiscalavulsa_destinatarioemail: string; 
  notafiscalavulsa_destinatariotelefone: string; 
  notafiscalavulsa_destinatariocep: string;      
  notafiscalavulsa_destinatariologradouro: string; 
  notafiscalavulsa_destinatarionumero: string; 
  notafiscalavulsa_destinatariocomplemento: string; 
  notafiscalavulsa_destinatariobairro: string;      
  notafiscalavulsa_emitentenome: string; 
  notafiscalavulsa_emitenteemail: string; 
  notafiscalavulsa_emitentetelefone: string; 
  notafiscalavulsa_emitentecep: string;      
  notafiscalavulsa_emitentelogradouro: string; 
  notafiscalavulsa_emitentenumero: string; 
  notafiscalavulsa_emitentecomplemento: string; 
  notafiscalavulsa_emitentebairro: string;      
  notafiscalavulsa_aliquota: number; 
  notafiscalavulsa_valor: number; 
  notafiscalavulsa_valorpis: number; 
  notafiscalavulsa_valorcofins: number; 
  notafiscalavulsa_valorcsll: number; 
  notafiscalavulsa_valorinss: number; 
  notafiscalavulsa_valorirrf: number; 
  notafiscalavulsa_valoriss: number; 
  notafiscalavulsa_valordeducoes: number; 
  notafiscalavulsa_valoroutrasretencoes: number; 
  notafiscalavulsa_descontocondicional: number; 
  notafiscalavulsa_descontoincondicional: number; 
  notafiscalavulsa_notasubstituida: string;      
  notafiscalavulsa_issretido: boolean;      
  notafiscalavulsa_numero: string; 
  notafiscalavulsa_obs: string; 
  notafiscalavulsa_hashcontrol: string;

  destinatario_id :  number;
  destinatario_nome :  string;
  destinatario_codigo :  string;

  destinatariotipologradouro_id :  number;
  destinatariotipologradouro_nome :  string;
  destinatariotipologradouro_codigo :  string;

  destinatariocidade_id :  number;
  destinatariocidade_nome :  string;
  destinatariocidade_codigo :  string;
  
  emitente_id :  number;
  emitente_nome :  string;
  emitente_codigo :  string;

  emitentetipologradouro_id :  number;
  emitentetipologradouro_nome :  string;
  emitentetipologradouro_codigo :  string;

  emitentecidade_id :  number;
  emitentecidade_nome :  string;
  emitentecidade_codigo :  string;
  
  servico_id :  number;
  servico_nome :  string;
  servico_codigo :  string;

  statusnotafiscal_id :  number;
  statusnotafiscal_nome :  string;
  statusnotafiscal_codigo :  string;

  unidadegestora_id :  number;
  unidadegestora_nome :  string;
  unidadegestora_codigo :  string
  
  localservico_id :  number;
  localservico_nome :  string;
  localservico_codigo :  string;
}
