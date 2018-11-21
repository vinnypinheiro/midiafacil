import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Programa} from './programa'; 

@Injectable({ providedIn: 'root' }) 
export class ProgramaService extends CommonsService<Programa> { 

     getPathModule(): string { 
         return 'programa'; 
     } 
} 
