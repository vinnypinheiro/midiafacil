import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Departamento} from './departamento'; 

@Injectable({ providedIn: 'root' }) 
export class DepartamentoService extends CommonsService<Departamento> { 

     getPathModule(): string { 
         return 'departamento'; 
     } 
} 
