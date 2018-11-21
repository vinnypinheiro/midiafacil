import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoDeclarante} from './tipodeclarante'; 

@Injectable({ providedIn: 'root' }) 
export class TipoDeclaranteService extends CommonsService<TipoDeclarante> { 

     getPathModule(): string { 
         return 'tipodeclarante'; 
     } 
} 
