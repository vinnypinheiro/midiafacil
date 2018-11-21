import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Cidade} from './cidade'; 

@Injectable({ providedIn: 'root' }) 
export class CidadeService extends CommonsService<Cidade> { 

     getPathModule(): string { 
         return 'cidade'; 
     } 
} 
