import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ProcessoExecucaoStatus} from './processoexecucaostatus'; 

@Injectable({ providedIn: 'root' }) 
export class ProcessoExecucaoStatusService extends CommonsService<ProcessoExecucaoStatus> { 

     getPathModule(): string { 
         return 'processoexecucaostatus'; 
     } 
} 
