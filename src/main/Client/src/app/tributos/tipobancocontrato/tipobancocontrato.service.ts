import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoBancoContrato} from './tipobancocontrato'; 

@Injectable({ providedIn: 'root' }) 
export class TipoBancoContratoService extends CommonsService<TipoBancoContrato> { 

     getPathModule(): string { 
         return 'tipobancocontrato'; 
     } 
} 
