import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoProduto} from './tipoproduto'; 

@Injectable({ providedIn: 'root' }) 
export class TipoProdutoService extends CommonsService<TipoProduto> { 

     getPathModule(): string { 
         return 'tipoproduto'; 
     } 
} 
