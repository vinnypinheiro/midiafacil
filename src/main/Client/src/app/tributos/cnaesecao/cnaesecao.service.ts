import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeSecao} from './cnaesecao'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeSecaoService extends CommonsService<CnaeSecao> { 

     getPathModule(): string { 
         return 'cnaesecao'; 
     } 
} 
