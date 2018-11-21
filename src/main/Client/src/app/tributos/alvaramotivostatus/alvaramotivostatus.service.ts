import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {AlvaraMotivoStatus} from './alvaramotivostatus'; 

@Injectable({ providedIn: 'root' }) 
export class AlvaraMotivoStatusService extends CommonsService<AlvaraMotivoStatus> { 

     getPathModule(): string { 
         return 'alvaramotivostatus'; 
     } 
} 
