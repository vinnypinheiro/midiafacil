import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {EmpresaServico} from './empresaservico'; 

@Injectable({ providedIn: 'root' }) 
export class EmpresaServicoService extends CommonsService<EmpresaServico> { 

     getPathModule(): string { 
         return 'empresaservico'; 
     } 
} 
