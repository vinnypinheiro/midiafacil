import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {RecursoSistema} from './recursosistema'; 

@Injectable({ providedIn: 'root' }) 
export class RecursoSistemaService extends CommonsService<RecursoSistema> { 

     getPathModule(): string { 
         return 'recursosistema'; 
     } 
} 
