import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {OperadorEmpresa} from './operadorempresa'; 

@Injectable({ providedIn: 'root' }) 
export class OperadorEmpresaService extends CommonsService<OperadorEmpresa> { 

     getPathModule(): string { 
         return 'operadorempresa'; 
     } 
} 
