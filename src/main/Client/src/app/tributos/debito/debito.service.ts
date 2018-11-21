import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Debito} from './debito'; 

@Injectable({ providedIn: 'root' }) 
export class DebitoService extends CommonsService<Debito> { 

     getPathModule(): string { 
         return 'debito'; 
     } 
} 
