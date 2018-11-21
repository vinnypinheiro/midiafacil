import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CertidaoEmitida} from './certidaoemitida'; 

@Injectable({ providedIn: 'root' }) 
export class CertidaoEmitidaService extends CommonsService<CertidaoEmitida> { 

     getPathModule(): string { 
         return 'certidaoemitida'; 
     } 
} 
