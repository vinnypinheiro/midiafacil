import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoUnidadeEmpresa} from './tipounidadeempresa'; 

@Injectable({ providedIn: 'root' }) 
export class TipoUnidadeEmpresaService extends CommonsService<TipoUnidadeEmpresa> { 

     getPathModule(): string { 
         return 'tipounidadeempresa'; 
     } 
} 
