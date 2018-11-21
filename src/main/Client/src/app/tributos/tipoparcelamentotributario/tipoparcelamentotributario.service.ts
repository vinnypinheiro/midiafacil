import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoParcelamentoTributario} from './tipoparcelamentotributario'; 

@Injectable({ providedIn: 'root' }) 
export class TipoParcelamentoTributarioService extends CommonsService<TipoParcelamentoTributario> { 

     getPathModule(): string { 
         return 'tipoparcelamentotributario'; 
     } 
} 
