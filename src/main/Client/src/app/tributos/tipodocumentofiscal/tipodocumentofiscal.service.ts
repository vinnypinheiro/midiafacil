import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoDocumentoFiscal} from './tipodocumentofiscal'; 

@Injectable({ providedIn: 'root' }) 
export class TipoDocumentoFiscalService extends CommonsService<TipoDocumentoFiscal> { 

     getPathModule(): string { 
         return 'tipodocumentofiscal'; 
     } 
} 
