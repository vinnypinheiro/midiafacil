import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Pais} from './pais'; 

@Injectable({ providedIn: 'root' }) 
export class PaisService extends CommonsService<Pais> { 

     getPathModule(): string { 
         return 'pais'; 
     } 
} 
