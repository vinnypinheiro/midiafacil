import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Socio} from './socio'; 

@Injectable({ providedIn: 'root' }) 
export class SocioService extends CommonsService<Socio> { 

     getPathModule(): string { 
         return 'socio'; 
     } 
} 
