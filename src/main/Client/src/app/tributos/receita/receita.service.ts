import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Receita} from './receita'; 

@Injectable({ providedIn: 'root' }) 
export class ReceitaService extends CommonsService<Receita> { 

     getPathModule(): string { 
         return 'receita'; 
     } 
} 
