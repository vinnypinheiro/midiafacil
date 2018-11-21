import {DomainBase} from '../../utils/utils';
import {DebitoParcela} from "../debitoparcela/debitoparcela";

export interface Debito extends DomainBase {


  debito_data: Date;
  debito_aliquota: number;
  debito_basecalculo: number;
  debito_ano: number;
  debito_valor: number;
  debito_processo: string;
  debito_numero: number;
  debito_obs: string;
  debito_tipocontribuinte: string;
  debito_parcelas: DebitoParcela[];

  referencia_id: number;
  referencia_codigo: string;
  referencia_nome: string;

  unidadegestora_id: number;
  unidadegestora_nome: string;
  unidadegestora_codigo: string;

  tributo_id: number;
  tributo_nome: string;
  tributo_codigo: string;

  tipodebito_id: number;
  tipodebito_nome: string;
  tipodebito_codigo: string;


}
