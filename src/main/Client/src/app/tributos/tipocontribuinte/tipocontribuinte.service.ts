import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoContribuinte} from './tipocontribuinte'; 

@Injectable({ providedIn: 'root' }) 
export class TipoContribuinteService extends CommonsService<TipoContribuinte> { 

     getPathModule(): string { 
         return 'tipocontribuinte'; 
     } 
} 
