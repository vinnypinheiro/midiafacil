import {DomainBase} from '../../utils/utils';
import {Agencia} from "../agencia/agencia";
import {Cliente} from "../cliente/cliente";
import {Veiculo} from "../veiculo/veiculo";
import {Campanha} from "../campanha/campanha";
import {Peca} from "../peca/peca";
import {PedidoInsercaoItem} from "../pedidoinsercaoitem/pedidoinsercaoitem";
import {PlanoMidia} from "../planomidia/planomidia";

export interface PedidoInsercao extends DomainBase { 

     codigo: string; 
     informacoesimportantes: string; 

     dataemissao: Date;
     periodo: String;
     status: String;
     osagencia: string;
     totalbruto: number;
     comissao: number;
     totalliquido: number;

     vencimentotxt: string;
     faturamentotxt: string;
     obs: string;
     praca: string;

    agencia_id: Agencia;
    cliente_id: Cliente;
    veiculo_id: Veiculo;
    campanha_id: Campanha;
    planomidia_id: PlanoMidia;

    pecaList: Peca;
    pedidoinsercaoitemList: PedidoInsercaoItem;


}