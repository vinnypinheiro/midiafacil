import {DomainBase} from '../../utils/utils'; 

export interface Imovel extends DomainBase { 

  imovel_tipoinscricao: string;
  imovel_datainscricao: Date;
  imovel_inscricao: string;
  imovel_inscricaoanterior: string;
  imovel_dataconstrucao: Date;
  imovel_fatorconstrucao: number;
  imovel_areaterreno: number;
  imovel_areaconstrucao: number;
  imovel_fatorterreno: number;
  imovel_fracaoideal: number;
  imovel_incra: string;
  imovel_unidade: string;
  imovel_subunidade: string;
  imovel_testadadireita: number;
  imovel_testadaesquerda: number;
  imovel_testadafrente: number;
  imovel_testadafundo: number;
  imovel_valorvenalconstrucao: number;
  imovel_valorvenalexcedente: number;
  imovel_valorvenalterreno: number;
  imovel_lote: string;
  imovel_loteamentolote: string;
  imovel_loteamento: number;
  imovel_quadra: string;
  imovel_loteamentoquadra: string;
  imovel_datastatus: Date;
  imovel_numero: string;
  imovel_complemento: string;
  imovel_enderecocorespondencia: boolean;
  imovel_numerometrico: number;
  imovel_pavimentos: number;
  imovel_medidoragua: string;
  imovel_medidorluz: string;
  imovel_confrontantes: string;
  imovel_imuneiptu: boolean;
  imovel_imunetaxa: boolean;
  imovel_datarecadastramento: Date;
  imovel_datarevisao: Date;
  imovel_dataatualizacao: Date;
  imovel_longitude: number;
  imovel_latitude: number;
  imovel_obs: string;


  inscricaostatus_id: number;
  inscricaostatus_nome: string;
  inscricaostatus_codigo: string;

  contribuinte_id: number;
  contribuinte_nome: string;
  contribuinte_codigo: string;

  padraoconstrutivo_id: number;
  padraoconstrutivo_nome: string;
  padraoconstrutivo_codigo: string;

  loteamento_id: number;
  loteamento_nome: string;
  loteamento_codigo: string;

  distrito_id: number;
  distrito_nome: string;
  distrito_codigo: string;

  setor_id: number;
  setor_nome: string;
  setor_codigo: string;

  logradourosegmento_id: number;
  logradourosegmento_nome: string;
  logradourosegmento_codigo: string;

  logradouro_id: number;
  logradouro_nome: string;
  logradouro_codigo: string;

  condominio_id: number;
  condominio_nome: string;
  condominio_codigo: string;

  bairro_id: number;
  bairro_nome: string;
  bairro_codigo: string;

  tipoimovel_id: number;
  tipoimovel_nome: string;
  tipoimovel_codigo: string;

  tipounidade_id: number;
  tipounidade_nome: string;
  tipounidade_codigo: string;

  responsavel_id: number;
  responsavel_nome: string;
  responsavel_codigo: string;

  motivostatus_id: number;
  motivostatus_nome: string;
  motivostatus_codigo: string;
}
