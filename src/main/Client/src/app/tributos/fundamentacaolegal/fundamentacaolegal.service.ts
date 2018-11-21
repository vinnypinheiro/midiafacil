import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {FundamentacaoLegal} from './fundamentacaolegal'; 

@Injectable({ providedIn: 'root' }) 
export class FundamentacaoLegalService extends CommonsService<FundamentacaoLegal> { 

     getPathModule(): string { 
         return 'fundamentacaolegal'; 
     } 
} 
