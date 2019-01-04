import {DomainBase} from '../../utils/utils'; 
import { Cliente } from '../cliente/cliente';
import { Veiculo } from '../veiculo/veiculo';

export interface Email extends DomainBase { 

     tipoemail: string;
     email: string;
     cliente_id: Cliente;
     veiculo_id: Veiculo;
}