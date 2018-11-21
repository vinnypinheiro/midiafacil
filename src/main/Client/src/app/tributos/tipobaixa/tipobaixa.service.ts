import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoBaixa} from './tipobaixa'; 

@Injectable({ providedIn: 'root' }) 
export class TipoBaixaService extends CommonsService<TipoBaixa> { 

     getPathModule(): string { 
         return 'tipobaixa'; 
     } 
} 
