import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {MotivoStatus} from './motivostatus'; 

@Injectable({ providedIn: 'root' }) 
export class MotivoStatusService extends CommonsService<MotivoStatus> { 

     getPathModule(): string { 
         return 'motivostatus'; 
     } 
} 
