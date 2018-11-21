import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoDeclaracao} from './tipodeclaracao'; 

@Injectable({ providedIn: 'root' }) 
export class TipoDeclaracaoService extends CommonsService<TipoDeclaracao> { 

     getPathModule(): string { 
         return 'tipodeclaracao'; 
     } 
} 
