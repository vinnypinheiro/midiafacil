import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {BaixaStatus} from './baixastatus'; 

@Injectable({ providedIn: 'root' }) 
export class BaixaStatusService extends CommonsService<BaixaStatus> { 

     getPathModule(): string { 
         return 'baixastatus'; 
     } 
} 
