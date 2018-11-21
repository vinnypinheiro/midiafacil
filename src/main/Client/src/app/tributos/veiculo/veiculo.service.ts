import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Veiculo} from './veiculo'; 

@Injectable({ providedIn: 'root' }) 
export class VeiculoService extends CommonsService<Veiculo> { 

     getPathModule(): string { 
         return 'veiculo'; 
     } 
} 
