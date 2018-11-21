import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoOperador} from './tipooperador'; 

@Injectable({ providedIn: 'root' }) 
export class TipoOperadorService extends CommonsService<TipoOperador> { 

     getPathModule(): string { 
         return 'tipooperador'; 
     } 
} 
