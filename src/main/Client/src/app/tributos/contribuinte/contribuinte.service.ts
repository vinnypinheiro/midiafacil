import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Contribuinte} from './contribuinte'; 

@Injectable({ providedIn: 'root' }) 
export class ContribuinteService extends CommonsService<Contribuinte> { 

     getPathModule(): string { 
         return 'contribuinte'; 
     } 
} 
