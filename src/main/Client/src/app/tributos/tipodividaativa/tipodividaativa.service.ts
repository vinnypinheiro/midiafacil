import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoDividaAtiva} from './tipodividaativa'; 

@Injectable({ providedIn: 'root' }) 
export class TipoDividaAtivaService extends CommonsService<TipoDividaAtiva> { 

     getPathModule(): string { 
         return 'tipodividaativa'; 
     } 
} 
