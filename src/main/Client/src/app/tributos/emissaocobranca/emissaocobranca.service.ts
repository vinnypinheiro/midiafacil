import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {EmissaoCobranca} from './emissaocobranca'; 

@Injectable({ providedIn: 'root' }) 
export class EmissaoCobrancaService extends CommonsService<EmissaoCobranca> { 

     getPathModule(): string { 
         return 'emissaocobranca'; 
     } 
} 
