import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoConta} from './tipoconta'; 

@Injectable({ providedIn: 'root' }) 
export class TipoContaService extends CommonsService<TipoConta> { 

     getPathModule(): string { 
         return 'tipoconta'; 
     } 
} 
