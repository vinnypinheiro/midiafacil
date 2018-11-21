import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {DeclaracaoFiscal} from './declaracaofiscal'; 

@Injectable({ providedIn: 'root' }) 
export class DeclaracaoFiscalService extends CommonsService<DeclaracaoFiscal> { 

     getPathModule(): string { 
         return 'declaracaofiscal'; 
     } 
} 
