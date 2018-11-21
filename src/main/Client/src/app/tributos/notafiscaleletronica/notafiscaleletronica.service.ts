import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {NotaFiscalEletronica} from './notafiscaleletronica'; 

@Injectable({ providedIn: 'root' }) 
export class NotaFiscalEletronicaService extends CommonsService<NotaFiscalEletronica> { 

     getPathModule(): string { 
         return 'notafiscaleletronica'; 
     } 
} 
