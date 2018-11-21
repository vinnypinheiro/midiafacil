import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Distrito} from './distrito'; 

@Injectable({ providedIn: 'root' }) 
export class DistritoService extends CommonsService<Distrito> { 

     getPathModule(): string { 
         return 'distrito'; 
     } 
} 
