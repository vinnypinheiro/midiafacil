import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Cartorio} from './cartorio'; 

@Injectable({ providedIn: 'root' }) 
export class CartorioService extends CommonsService<Cartorio> { 

     getPathModule(): string { 
         return 'cartorio'; 
     } 
} 
