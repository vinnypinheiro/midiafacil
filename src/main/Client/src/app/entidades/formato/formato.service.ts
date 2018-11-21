import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Formato} from './formato'; 

@Injectable({ providedIn: 'root' }) 
export class FormatoService extends CommonsService<Formato> { 

     getPathModule(): string { 
         return 'formato'; 
     } 
} 
