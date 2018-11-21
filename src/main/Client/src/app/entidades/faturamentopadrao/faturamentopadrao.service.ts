import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {FaturamentoPadrao} from './faturamentopadrao'; 

@Injectable({ providedIn: 'root' }) 
export class FaturamentoPadraoService extends CommonsService<FaturamentoPadrao> { 

     getPathModule(): string { 
         return 'faturamentopadrao'; 
     } 
} 
