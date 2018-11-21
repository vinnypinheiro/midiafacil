import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoUsoAlvara} from './tipousoalvara'; 

@Injectable({ providedIn: 'root' }) 
export class TipoUsoAlvaraService extends CommonsService<TipoUsoAlvara> { 

     getPathModule(): string { 
         return 'tipousoalvara'; 
     } 
} 
