import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PorteEmpresa} from './porteempresa'; 

@Injectable({ providedIn: 'root' }) 
export class PorteEmpresaService extends CommonsService<PorteEmpresa> { 

     getPathModule(): string { 
         return 'porteempresa'; 
     } 
} 
