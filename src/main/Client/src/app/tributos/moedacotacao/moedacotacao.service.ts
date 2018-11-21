import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {MoedaCotacao} from './moedacotacao'; 

@Injectable({ providedIn: 'root' }) 
export class MoedaCotacaoService extends CommonsService<MoedaCotacao> { 

     getPathModule(): string { 
         return 'moedacotacao'; 
     } 
} 
