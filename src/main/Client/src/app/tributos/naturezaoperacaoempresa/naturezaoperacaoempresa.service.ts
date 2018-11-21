import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {NaturezaOperacaoEmpresa} from './naturezaoperacaoempresa'; 

@Injectable({ providedIn: 'root' }) 
export class NaturezaOperacaoEmpresaService extends CommonsService<NaturezaOperacaoEmpresa> { 

     getPathModule(): string { 
         return 'naturezaoperacaoempresa'; 
     } 
} 
