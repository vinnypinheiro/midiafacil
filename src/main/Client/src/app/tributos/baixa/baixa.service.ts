import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Baixa} from './baixa'; 

@Injectable({ providedIn: 'root' }) 
export class BaixaService extends CommonsService<Baixa> { 

     getPathModule(): string { 
         return 'baixa'; 
     } 
} 
