import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CalendarioFiscal} from './calendariofiscal'; 

@Injectable({ providedIn: 'root' }) 
export class CalendarioFiscalService extends CommonsService<CalendarioFiscal> { 

     getPathModule(): string { 
         return 'calendariofiscal'; 
     } 
} 
