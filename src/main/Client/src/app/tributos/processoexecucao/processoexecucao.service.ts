import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ProcessoExecucao} from './processoexecucao'; 

@Injectable({ providedIn: 'root' }) 
export class ProcessoExecucaoService extends CommonsService<ProcessoExecucao> { 

     getPathModule(): string { 
         return 'processoexecucao'; 
     } 
} 
