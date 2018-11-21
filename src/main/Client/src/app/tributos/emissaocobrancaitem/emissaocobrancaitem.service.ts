import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {EmissaoCobrancaItem} from './emissaocobrancaitem'; 

@Injectable({ providedIn: 'root' }) 
export class EmissaoCobrancaItemService extends CommonsService<EmissaoCobrancaItem> { 

     getPathModule(): string { 
         return 'emissaocobrancaitem'; 
     } 
} 
