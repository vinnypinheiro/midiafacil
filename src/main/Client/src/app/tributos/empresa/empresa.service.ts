import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Empresa} from './empresa'; 

@Injectable({ providedIn: 'root' }) 
export class EmpresaService extends CommonsService<Empresa> { 

     getPathModule(): string { 
         return 'empresa'; 
     } 
} 
