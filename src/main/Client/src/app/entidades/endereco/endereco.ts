import {DomainBase} from '../../utils/utils'; 
import { Cliente } from '../cliente/cliente';
import { Veiculo } from '../veiculo/veiculo';

export interface Endereco extends DomainBase { 

     endereco: string;
     cidade: string;
     bairro: string;
     estado: string;
     cep: string;
     cliente_id: Cliente;
     veiculo_id: Veiculo;
}