import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {OperadorRecurso} from './operadorrecurso'; 

@Injectable({ providedIn: 'root' }) 
export class OperadorRecursoService extends CommonsService<OperadorRecurso> { 

     getPathModule(): string { 
         return 'operadorrecurso'; 
     } 
} 
