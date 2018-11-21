import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoConcessao} from './tipoconcessao'; 

@Injectable({ providedIn: 'root' }) 
export class TipoConcessaoService extends CommonsService<TipoConcessao> { 

     getPathModule(): string { 
         return 'tipoconcessao'; 
     } 
} 
