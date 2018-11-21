import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Servico} from './servico'; 

@Injectable({ providedIn: 'root' }) 
export class ServicoService extends CommonsService<Servico> { 

     getPathModule(): string { 
         return 'servico'; 
     } 
} 
