import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Condominio} from './condominio'; 

@Injectable({ providedIn: 'root' }) 
export class CondominioService extends CommonsService<Condominio> { 

     getPathModule(): string { 
         return 'condominio'; 
     } 
} 
