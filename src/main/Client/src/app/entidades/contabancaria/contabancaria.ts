import {DomainBase} from '../../utils/utils'; 
import { Cliente } from '../cliente/cliente';
import { Veiculo } from '../veiculo/veiculo';

export interface ContaBancaria extends DomainBase { 

     banco: string;
     agencia: string;
     conta: string;
     operacao: string;
     tipoconta: string;
     cnpjcpf: number;
     favorecido: string;
     cliente_id: Cliente;
     veiculo_id: Veiculo;
}