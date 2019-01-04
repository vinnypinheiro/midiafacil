import {DomainBase} from '../../utils/utils'; 
import { Cliente } from '../cliente/cliente';
import { Veiculo } from '../veiculo/veiculo';

export interface Contato extends DomainBase { 

     contato: string;
     email: string;
     telefone: string;
     tipocontato: string;
     cliente_id: Cliente;
     veiculo_id: Veiculo;
}