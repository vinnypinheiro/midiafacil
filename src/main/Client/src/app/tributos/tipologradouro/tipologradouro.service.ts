import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoLogradouro} from './tipologradouro'; 

@Injectable({ providedIn: 'root' }) 
export class TipoLogradouroService extends CommonsService<TipoLogradouro> { 

     getPathModule(): string { 
         return 'tipologradouro'; 
     } 
} 
