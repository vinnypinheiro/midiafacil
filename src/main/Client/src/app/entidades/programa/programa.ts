import {DomainBase} from '../../utils/utils'; 
import { Veiculo } from '../veiculo/veiculo';

export interface Programa extends DomainBase { 

     descricao: string; 
     horario: string; 
     valor: number;
     veiculo_id: Veiculo;
}