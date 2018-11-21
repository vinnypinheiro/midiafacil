import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Logradouro} from './logradouro'; 

@Injectable({ providedIn: 'root' }) 
export class LogradouroService extends CommonsService<Logradouro> { 

     getPathModule(): string { 
         return 'logradouro'; 
     } 
} 
