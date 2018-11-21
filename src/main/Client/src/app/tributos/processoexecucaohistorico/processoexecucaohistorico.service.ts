import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ProcessoExecucaoHistorico} from './processoexecucaohistorico'; 

@Injectable({ providedIn: 'root' }) 
export class ProcessoExecucaoHistoricoService extends CommonsService<ProcessoExecucaoHistorico> { 

     getPathModule(): string { 
         return 'processoexecucaohistorico'; 
     } 
} 
