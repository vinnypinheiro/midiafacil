import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Uf} from './uf'; 

@Injectable({ providedIn: 'root' }) 
export class UfService extends CommonsService<Uf> { 

     getPathModule(): string { 
         return 'uf'; 
     } 
} 
