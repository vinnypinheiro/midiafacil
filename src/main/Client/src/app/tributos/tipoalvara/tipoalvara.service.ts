import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoAlvara} from './tipoalvara'; 

@Injectable({ providedIn: 'root' }) 
export class TipoAlvaraService extends CommonsService<TipoAlvara> { 

     getPathModule(): string { 
         return 'tipoalvara'; 
     } 
} 
