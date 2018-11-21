import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoUnidade} from './tipounidade'; 

@Injectable({ providedIn: 'root' }) 
export class TipoUnidadeService extends CommonsService<TipoUnidade> { 

     getPathModule(): string { 
         return 'tipounidade'; 
     } 
} 
