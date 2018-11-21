import {DomainBase} from '../../utils/utils';

import {Peca} from "../peca/peca";
import {PedidoInsercaoItem} from "../pedidoinsercaoitem/pedidoinsercaoitem";
import {Cliente} from "../cliente/cliente";
import {Agencia} from "../agencia/agencia";

export interface PlanoMidia extends DomainBase {

     codigo: string;
     hora: number;
     mercado: string;
     obs: string;
     data: Date;
     programa: string;
     agencia_id :  Agencia;
     agencia_id_nome :  string;
     agencia_id_codigo :  string;
     campanha_id_id :  number;
     campanha_id_nome :  string;
     campanha_id_codigo :  string;
     cliente_id :  Cliente;
     pecalist: Peca[];
     pedidoDeInsercaoItemlist: PedidoInsercaoItem[];
}
