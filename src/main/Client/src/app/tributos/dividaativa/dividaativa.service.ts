import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {DividaAtiva} from './dividaativa'; 

@Injectable({ providedIn: 'root' }) 
export class DividaAtivaService extends CommonsService<DividaAtiva> { 

     getPathModule(): string { 
         return 'dividaativa'; 
     } 
} 
