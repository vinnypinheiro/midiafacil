import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoVeiculo} from './tipoveiculo'; 

@Injectable({ providedIn: 'root' }) 
export class TipoVeiculoService extends CommonsService<TipoVeiculo> { 

     getPathModule(): string { 
         return 'tipoveiculo'; 
     } 
} 
