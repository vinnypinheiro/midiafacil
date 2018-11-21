import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeSecundarios} from './cnaesecundarios'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeSecundariosService extends CommonsService<CnaeSecundarios> { 

     getPathModule(): string { 
         return 'cnaesecundarios'; 
     } 
} 
