import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TxMercado} from './txmercado'; 

@Injectable({ providedIn: 'root' }) 
export class TxMercadoService extends CommonsService<TxMercado> { 

     getPathModule(): string { 
         return 'txmercado'; 
     } 
} 
