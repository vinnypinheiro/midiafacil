import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {StatusNotaFiscal} from './statusnotafiscal'; 

@Injectable({ providedIn: 'root' }) 
export class StatusNotaFiscalService extends CommonsService<StatusNotaFiscal> { 

     getPathModule(): string { 
         return 'statusnotafiscal'; 
     } 
} 
