import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Procurador} from './procurador'; 

@Injectable({ providedIn: 'root' }) 
export class ProcuradorService extends CommonsService<Procurador> { 

     getPathModule(): string { 
         return 'procurador'; 
     } 
} 
