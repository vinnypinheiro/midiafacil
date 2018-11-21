import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ParcelamentoTributarioItem} from './parcelamentotributarioitem'; 

@Injectable({ providedIn: 'root' }) 
export class ParcelamentoTributarioItemService extends CommonsService<ParcelamentoTributarioItem> { 

     getPathModule(): string { 
         return 'parcelamentotributarioitem'; 
     } 
} 
