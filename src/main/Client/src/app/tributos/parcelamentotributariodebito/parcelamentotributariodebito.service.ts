import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ParcelamentoTributarioDebito} from './parcelamentotributariodebito'; 

@Injectable({ providedIn: 'root' }) 
export class ParcelamentoTributarioDebitoService extends CommonsService<ParcelamentoTributarioDebito> { 

     getPathModule(): string { 
         return 'parcelamentotributariodebito'; 
     } 
} 
