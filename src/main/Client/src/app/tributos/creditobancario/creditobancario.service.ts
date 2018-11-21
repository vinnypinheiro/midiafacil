import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CreditoBancario} from './creditobancario'; 

@Injectable({ providedIn: 'root' }) 
export class CreditoBancarioService extends CommonsService<CreditoBancario> { 

     getPathModule(): string { 
         return 'creditobancario'; 
     } 
} 
