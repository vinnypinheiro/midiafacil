import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoCartorio} from './tipocartorio'; 

@Injectable({ providedIn: 'root' }) 
export class TipoCartorioService extends CommonsService<TipoCartorio> { 

     getPathModule(): string { 
         return 'tipocartorio'; 
     } 
} 
