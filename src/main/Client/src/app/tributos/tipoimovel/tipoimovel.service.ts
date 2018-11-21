import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoImovel} from './tipoimovel'; 

@Injectable({ providedIn: 'root' }) 
export class TipoImovelService extends CommonsService<TipoImovel> { 

     getPathModule(): string { 
         return 'tipoimovel'; 
     } 
} 
