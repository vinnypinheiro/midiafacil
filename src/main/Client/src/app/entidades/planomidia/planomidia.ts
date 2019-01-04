import {DomainBase} from '../../utils/utils';

import {Peca} from "../peca/peca";
import {PedidoInsercaoItem} from "../pedidoinsercaoitem/pedidoinsercaoitem";
import {Cliente} from "../cliente/cliente";
import {Agencia} from "../agencia/agencia";
import {Campanha} from "../campanha/campanha";

export interface PlanoMidia extends DomainBase {

     codigo: string;
     hora: number;
     mercado: string;
     situação: string;
     obs: string;
     tipo: string;
     data: Date;
     programa: string;
     agencia_id :  Agencia;
     agencia_id_nome :  string;
     agencia_id_codigo :  string;
     cliente_id :  Cliente;
     campanha_id: Campanha;
     pecalist: Peca[];
     pedidoDeInsercaoItemlist: PedidoInsercaoItem[];
}
