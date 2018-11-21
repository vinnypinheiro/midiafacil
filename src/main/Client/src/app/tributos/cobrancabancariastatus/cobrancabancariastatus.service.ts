import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CobrancaBancariaStatus} from './cobrancabancariastatus'; 

@Injectable({ providedIn: 'root' }) 
export class CobrancaBancariaStatusService extends CommonsService<CobrancaBancariaStatus> { 

     getPathModule(): string { 
         return 'cobrancabancariastatus'; 
     } 
} 
