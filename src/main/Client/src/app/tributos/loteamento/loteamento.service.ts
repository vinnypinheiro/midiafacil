import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Loteamento} from './loteamento'; 

@Injectable({ providedIn: 'root' }) 
export class LoteamentoService extends CommonsService<Loteamento> { 

     getPathModule(): string { 
         return 'loteamento'; 
     } 
} 
