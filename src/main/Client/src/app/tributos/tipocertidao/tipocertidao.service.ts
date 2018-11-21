import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoCertidao} from './tipocertidao'; 

@Injectable({ providedIn: 'root' }) 
export class TipoCertidaoService extends CommonsService<TipoCertidao> { 

     getPathModule(): string { 
         return 'tipocertidao'; 
     } 
} 
