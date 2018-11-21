import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ProcessoExecucaoItem} from './processoexecucaoitem'; 

@Injectable({ providedIn: 'root' }) 
export class ProcessoExecucaoItemService extends CommonsService<ProcessoExecucaoItem> { 

     getPathModule(): string { 
         return 'processoexecucaoitem'; 
     } 
} 
