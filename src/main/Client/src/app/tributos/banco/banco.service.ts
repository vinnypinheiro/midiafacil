import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Banco} from './banco'; 

@Injectable({ providedIn: 'root' }) 
export class BancoService extends CommonsService<Banco> { 

     getPathModule(): string { 
         return 'banco'; 
     } 
} 
