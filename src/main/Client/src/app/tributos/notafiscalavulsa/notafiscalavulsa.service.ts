import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {NotaFiscalAvulsa} from './notafiscalavulsa'; 

@Injectable({ providedIn: 'root' }) 
export class NotaFiscalAvulsaService extends CommonsService<NotaFiscalAvulsa> { 

     getPathModule(): string { 
         return 'notafiscalavulsa'; 
     } 
} 
