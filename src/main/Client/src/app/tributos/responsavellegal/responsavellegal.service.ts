import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ResponsavelLegal} from './responsavellegal'; 

@Injectable({ providedIn: 'root' }) 
export class ResponsavelLegalService extends CommonsService<ResponsavelLegal> { 

     getPathModule(): string { 
         return 'responsavellegal'; 
     } 
} 
