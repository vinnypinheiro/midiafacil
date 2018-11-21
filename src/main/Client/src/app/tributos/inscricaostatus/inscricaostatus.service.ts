import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {InscricaoStatus} from './inscricaostatus'; 

@Injectable({ providedIn: 'root' }) 
export class InscricaoStatusService extends CommonsService<InscricaoStatus> { 

     getPathModule(): string { 
         return 'inscricaostatus'; 
     } 
} 
