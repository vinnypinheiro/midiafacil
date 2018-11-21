import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {StatusDeclaracaoEletronica} from './statusdeclaracaoeletronica'; 

@Injectable({ providedIn: 'root' }) 
export class StatusDeclaracaoEletronicaService extends CommonsService<StatusDeclaracaoEletronica> { 

     getPathModule(): string { 
         return 'statusdeclaracaoeletronica'; 
     } 
} 
