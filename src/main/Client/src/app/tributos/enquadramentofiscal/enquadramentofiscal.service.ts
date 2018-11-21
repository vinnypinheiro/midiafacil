import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {EnquadramentoFiscal} from './enquadramentofiscal'; 

@Injectable({ providedIn: 'root' }) 
export class EnquadramentoFiscalService extends CommonsService<EnquadramentoFiscal> { 

     getPathModule(): string { 
         return 'enquadramentofiscal'; 
     } 
} 
