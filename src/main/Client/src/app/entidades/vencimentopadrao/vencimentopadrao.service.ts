import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {VencimentoPadrao} from './vencimentopadrao'; 

@Injectable({ providedIn: 'root' }) 
export class VencimentoPadraoService extends CommonsService<VencimentoPadrao> { 

     getPathModule(): string { 
         return 'vencimentopadrao'; 
     } 
} 
