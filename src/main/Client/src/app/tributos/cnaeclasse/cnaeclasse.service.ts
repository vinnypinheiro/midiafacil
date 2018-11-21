import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeClasse} from './cnaeclasse'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeClasseService extends CommonsService<CnaeClasse> { 

     getPathModule(): string { 
         return 'cnaeclasse'; 
     } 
} 
