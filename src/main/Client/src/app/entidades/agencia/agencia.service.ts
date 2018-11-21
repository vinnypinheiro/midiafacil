import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Agencia} from './agencia'; 

@Injectable({ providedIn: 'root' }) 
export class AgenciaService extends CommonsService<Agencia> { 

     getPathModule(): string { 
         return 'agencia'; 
     } 
} 
