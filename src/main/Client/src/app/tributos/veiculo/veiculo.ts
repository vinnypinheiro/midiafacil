import {DomainBase} from '../../utils/utils'; 

export interface Veiculo extends DomainBase { 

  veiculo_fabricante: string;
  veiculo_marca: string;
  veiculo_modelo: string;
  veiculo_cor: string;
  veiculo_combustivel: string;
  veiculo_chassi: string;
  veiculo_placa: string;
  veiculo_renavam: string;
  veiculo_cilindrada: number;
  veiculo_especie: string;
  veiculo_capacidade: number;
  veiculo_potencia: number;
  veiculo_municipio: string;
  veiculo_restricoes: string;
  veiculo_dataaquisicao: Date;
  veiculo_anofabricacao: number;
  veiculo_anoipva: number;
  veiculo_anolicenciamento: number;
  veiculo_anomodelo: number;

  contribuinte_id :  number;
  contribuinte_nome :  string;
  contribuinte_codigo :  string;

  tipoveiculo_id :  number;
  tipoveiculo_nome :  string;
  tipoveiculo_codigo :  string;

  categoriaveiculo_id :  number;
  categoriaveiculo_nome :  string;
  categoriaveiculo_codigo :  string;
}
