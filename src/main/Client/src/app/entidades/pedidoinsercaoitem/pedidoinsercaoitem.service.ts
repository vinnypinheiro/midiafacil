import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PedidoInsercaoItem} from './pedidoinsercaoitem'; 

@Injectable({ providedIn: 'root' }) 
export class PedidoInsercaoItemService extends CommonsService<PedidoInsercaoItem> { 

     getPathModule(): string { 
         return 'pedidoinsercaoitem'; 
     } 
} 
