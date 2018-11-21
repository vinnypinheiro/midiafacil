import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ParcelamentoTributario} from './parcelamentotributario'; 

@Injectable({ providedIn: 'root' }) 
export class ParcelamentoTributarioService extends CommonsService<ParcelamentoTributario> { 

     getPathModule(): string { 
         return 'parcelamentotributario'; 
     } 
} 
