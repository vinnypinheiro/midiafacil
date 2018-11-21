import {DomainBase} from '../../utils/utils'; 

export interface Empresa extends DomainBase { 

  empresa_tipoinscricao: string;
  empresa_datainscricao: Date;
  empresa_datastatus: Date;
  empresa_databaixa: Date;
  empresa_datasimplesnacional: Date;
  empresa_dataadesaonfse: Date;
  empresa_dataatualizacao: Date;
  empresa_inscricao: string;
  empresa_inscricaoestadual: string;
  empresa_inscricaoanterior: string;
  empresa_email: string;
  empresa_inscricaoimobiliaria: string;
  empresa_fantasia: string;
  empresa_empresamunicipio: boolean;
  empresa_imunetff: boolean;
  empresa_imuneiss: boolean;
  empresa_imunetaxavigilanciasanitaria: boolean;
  empresa_imunemeioambiente: boolean;
  empresa_imunebombeiro: boolean;
  empresa_numeronire: string;
  empresa_emitentenfse: boolean;
  empresa_contador: string;
  empresa_contador_crc: string;
  empresa_cep: string;
  empresa_logradouro: string;
  empresa_complemento: string;
  empresa_numero: string;
  empresa_bairro: string;
  empresa_obs: string;

  contribuinte_id: number;
  contribuinte_nome: string;
  contribuinte_codigo: string;

  naturezajuridica_id: number;
  naturezajuridica_nome: string;
  naturezajuridica_codigo: string;

  inscricaostatus_id: number;
  inscricaostatus_nome: string;
  inscricaostatus_codigo: string;

  motivostatus_id: number;
  motivostatus_nome: string;
  motivostatus_codigo: string;

  cnae_id: number;
  cnae_nome: string;
  cnae_codigo: string;

  naturezaoperacaoempresa_id: number;
  naturezaoperacaoempresa_nome: string;
  naturezaoperacaoempresa_codigo: string;

  simplesnacional_id: number;
  simplesnacional_nome: string;
  simplesnacional_codigo: string;

  porteempresa_id: number;
  porteempresa_nome: string;
  porteempresa_codigo: string;

  tipoconstituicaoempresa_id: number;
  tipoconstituicaoempresa_nome: string;
  tipoconstituicaoempresa_codigo: string;

  tipounidadeempresa_id: number;
  tipounidadeempresa_nome: string;
  tipounidadeempresa_codigo: string;

  enquadramentofiscal_id: number;
  enquadramentofiscal_nome: string;
  enquadramentofiscal_codigo: string;

  declaracaofiscal_id: number;
  declaracaofiscal_nome: string;
  declaracaofiscal_codigo: string;

  tipodeclarante_id: number;
  tipodeclarante_nome: string;
  tipodeclarante_codigo: string;

  ramoatividade_id: number;
  ramoatividade_nome: string;
  ramoatividade_codigo: string;

  orgaoregistroempresa_id: number;
  orgaoregistroempresa_nome: string;
  orgaoregistroempresa_codigo: string;

  cidade_id: number;
  cidade_nome: string;
  cidade_codigo: string;

  bairro_id: number;
  bairro_nome: string;
  bairro_codigo: string;

  tipologradouro_id: number;
  tipologradouro_nome: string;
  tipologradouro_codigo: string;

  logradouro_id: number;
  logradouro_nome: string;
  logradouro_codigo: string;
}
