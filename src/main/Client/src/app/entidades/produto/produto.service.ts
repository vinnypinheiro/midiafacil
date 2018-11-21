import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Produto} from './produto'; 

@Injectable({ providedIn: 'root' }) 
export class ProdutoService extends CommonsService<Produto> { 

     getPathModule(): string { 
         return 'produto'; 
     } 
} 
