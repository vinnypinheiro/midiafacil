import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Zona} from './zona'; 

@Injectable({ providedIn: 'root' }) 
export class ZonaService extends CommonsService<Zona> { 

     getPathModule(): string { 
         return 'zona'; 
     } 
} 
