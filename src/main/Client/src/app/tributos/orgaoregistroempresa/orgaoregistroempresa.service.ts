import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {OrgaoRegistroEmpresa} from './orgaoregistroempresa'; 

@Injectable({ providedIn: 'root' }) 
export class OrgaoRegistroEmpresaService extends CommonsService<OrgaoRegistroEmpresa> { 

     getPathModule(): string { 
         return 'orgaoregistroempresa'; 
     } 
} 
