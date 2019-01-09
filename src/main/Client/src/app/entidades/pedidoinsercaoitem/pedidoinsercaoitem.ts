import {DomainBase} from '../../utils/utils';
import {PlanoMidia} from "../planomidia/planomidia";

import {Veiculo} from "../veiculo/veiculo";
import { Peca } from '../peca/peca';
import { Programa } from '../programa/programa';
import {PedidoInsercao} from "../pedidoinsercao/pedidoinsercao";

export interface PedidoInsercaoItem extends DomainBase {

     data: Date;
     mes: string;
     ano: string;
     status: string;
     desconto: number;
     dia01: number;
     dia02: number;
     dia03: number;
     dia04: number;
     dia05: number;
     dia06: number;
     dia07: number;
     dia08: number;
     dia09: number;
     dia10: number;
     dia11: number;
     dia12: number;
     dia13: number;
     dia14: number;
     dia15: number;
     dia16: number;
     dia17: number;
     dia18: number;
     dia19: number;
     dia20: number;
     dia21: number;
     dia22: number;
     dia23: number;
     dia24: number;
     dia25: number;
     dia26: number;
     dia27: number;
     dia28: number;
     dia29: number;
     dia30: number;
     dia31: number;
     faturamento: Date;
     obs: string;
     qtd: number;
     valor: number;
     valorUnit: number;
     vencimento: Date;
     pedidoinsercao_id :  PedidoInsercao;
     planomidia_id :  PlanoMidia;
     veiculo_id :  Veiculo;
     peca_id :  Peca;
     programa_id :  Programa;
}
