import {DomainBase} from '../../utils/utils'; 

export interface NotaFiscalEletronica extends DomainBase { 

  notafiscaleletronica_aliquota: number;
  notafiscaleletronica_artobra: string;
  notafiscaleletronica_assinaturaadmtributaria: string;
  notafiscaleletronica_assinaturaprestador: string;
  notafiscaleletronica_cnpjcpfintermediario: string;
  notafiscaleletronica_codigoobra: string;
  notafiscaleletronica_competencia: string;
  notafiscaleletronica_datalancamento: Date;
  notafiscaleletronica_dataoperacao: Date;
  notafiscaleletronica_datastatus: Date;
  notafiscaleletronica_descontocondicional: number;
  notafiscaleletronica_descontoincondicional: number;
  notafiscaleletronica_trb_destinatario_id: number;
  notafiscaleletronica_destinatarionome: string;
  notafiscaleletronica_destinatarioemail: string;
  notafiscaleletronica_destinatariotelefone: string;
  notafiscaleletronica_destinatariocep: string;
  notafiscaleletronica_destinatariologradouro: string;
  notafiscaleletronica_destinatarionumero: string;
  notafiscaleletronica_destinatariocomplemento: string;
  notafiscaleletronica_destinatariobairro: string;
  notafiscaleletronica_trb_emitente_id: number;
  notafiscaleletronica_emitenterazaosocial: string;
  notafiscaleletronica_emitentetelefone: string;
  notafiscaleletronica_emitentenomefantasia: string;
  notafiscaleletronica_emitenteemail: string;
  notafiscaleletronica_emitentecep: string;
  notafiscaleletronica_emitentelogradouro: string;
  notafiscaleletronica_emitentenumero: string;
  notafiscaleletronica_emitentecomplemento: string;
  notafiscaleletronica_emitentebairro: string;
  notafiscaleletronica_detalhamentoservico: string;
  notafiscaleletronica_inscricaomunicipalintermediario: string;
  notafiscaleletronica_notasubstituida: string;
  notafiscaleletronica_numeroprocesso: string;
  notafiscaleletronica_numero: string;
  notafiscaleletronica_razaosocialintermediario: string;
  notafiscaleletronica_incentivocultural: boolean;
  notafiscaleletronica_incentivofiscal: boolean;
  notafiscaleletronica_issretido: boolean;
  notafiscaleletronica_valor: number;
  notafiscaleletronica_valorcofins: number;
  notafiscaleletronica_valorcsll: number;
  notafiscaleletronica_valordeducoes: number;
  notafiscaleletronica_valorinss: number;
  notafiscaleletronica_valorirrf: number;
  notafiscaleletronica_valoriss: number;
  notafiscaleletronica_valoroutrasretencoes: number;
  notafiscaleletronica_valorpis: number;
  notafiscaleletronica_valorcredito: number;
  notafiscaleletronica_valorunitario: number;
  notafiscaleletronica_hashcontrol: string;
  notafiscaleletronica_obs: string;

  destinatario_id: number;
  destinatario_nome: string;
  destinatario_codigo: string;

  destinatariotipologradouro_id :  number;
  destinatariotipologradouro_nome :  string;
  destinatariotipologradouro_codigo :  string;

  destinatariologradouro_id: number;
  destinatariologradouro_nome: string;
  destinatariologradouro_codigo: string;

  destinatariobairro_id: number;
  destinatariobairro_nome: string;
  destinatariobairro_codigo: string;

  destinatariocidade_id :  number;
  destinatariocidade_nome :  string;
  destinatariocidade_codigo :  string;

  emitentetipologradouro_id :  number;
  emitentetipologradouro_nome :  string;
  emitentetipologradouro_codigo :  string;

  emitente_id: number;
  emitente_nome: string;
  emitente_codigo: string;

  emitentelogradouro_id :  number;
  emitentelogradouro_nome :  string;
  emitentelogradouro_codigo :  string;

  emitentebairro_id: number;
  emitentebairro_nome: string;
  emitentebairro_codigo: string;

  emitentecidade_id :  number;
  emitentecidade_nome :  string;
  emitentecidade_codigo :  string;

  servico_id :  number;
  servico_nome :  string;
  servico_codigo :  string;

  empresa_id :  number;
  empresa_nome :  string;
  empresa_codigo :  string;

  cnae_id :  number;
  cnae_nome :  string;
  cnae_codigo :  string;

  localservico_id :  number;
  localservico_nome :  string;
  localservico_codigo :  string;

  municipioincidencia_id :  number;
  municipioincidencia_nome :  string;
  municipioincidencia_codigo :  string;

  unidadegestora_id :  number;
  unidadegestora_nome :  string;
  unidadegestora_codigo :  string;

  regimeespecialtributacao_id :  number;
  regimeespecialtributacao_nome :  string;
  regimeespecialtributacao_codigo :  string;

  naturezatributacao_id :  number;
  naturezatributacao_nome :  string;
  naturezatributacao_codigo :  string;

  simplesnacional_id :  number;
  simplesnacional_nome :  string;
  simplesnacional_codigo :  string;

  statusnotafiscal_id :  number;
  statusnotafiscal_nome :  string;
  statusnotafiscal_codigo :  string;
}
