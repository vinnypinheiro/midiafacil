import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoConstituicaoEmpresa} from './tipoconstituicaoempresa'; 

@Injectable({ providedIn: 'root' }) 
export class TipoConstituicaoEmpresaService extends CommonsService<TipoConstituicaoEmpresa> { 

     getPathModule(): string { 
         return 'tipoconstituicaoempresa'; 
     } 
} 
