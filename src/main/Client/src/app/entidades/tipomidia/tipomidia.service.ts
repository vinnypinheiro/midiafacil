import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoMidia} from './tipomidia'; 

@Injectable({ providedIn: 'root' }) 
export class TipoMidiaService extends CommonsService<TipoMidia> { 

     getPathModule(): string { 
         return 'tipomidia'; 
     } 
} 
