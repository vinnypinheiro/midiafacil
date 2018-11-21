import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PedidoInsercao} from './pedidoinsercao'; 

@Injectable({ providedIn: 'root' }) 
export class PedidoInsercaoService extends CommonsService<PedidoInsercao> { 

     getPathModule(): string { 
         return 'pedidoinsercao'; 
     } 
} 
