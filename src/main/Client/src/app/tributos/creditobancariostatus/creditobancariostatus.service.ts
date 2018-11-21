import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CreditoBancarioStatus} from './creditobancariostatus'; 

@Injectable({ providedIn: 'root' }) 
export class CreditoBancarioStatusService extends CommonsService<CreditoBancarioStatus> { 

     getPathModule(): string { 
         return 'creditobancariostatus'; 
     } 
} 
