import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {BancoContrato} from './bancocontrato'; 

@Injectable({ providedIn: 'root' }) 
export class BancoContratoService extends CommonsService<BancoContrato> { 

     getPathModule(): string { 
         return 'bancocontrato'; 
     } 
} 
