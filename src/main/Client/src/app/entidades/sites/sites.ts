import {DomainBase} from '../../utils/utils'; 
import { Cliente } from '../cliente/cliente';
import { Veiculo } from '../veiculo/veiculo';

export interface Sites extends DomainBase { 

     tiposite: string;
     site: string;
     cliente_id: Cliente;
     veiculo_id: Veiculo;
}