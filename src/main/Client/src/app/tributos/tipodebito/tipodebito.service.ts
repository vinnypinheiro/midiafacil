import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoDebito} from './tipodebito'; 

@Injectable({ providedIn: 'root' }) 
export class TipoDebitoService extends CommonsService<TipoDebito> { 

     getPathModule(): string { 
         return 'tipodebito'; 
     } 
} 
