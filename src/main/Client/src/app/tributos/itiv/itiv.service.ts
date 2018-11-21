import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Itiv} from './itiv'; 

@Injectable({ providedIn: 'root' }) 
export class ItivService extends CommonsService<Itiv> { 

     getPathModule(): string { 
         return 'itiv'; 
     } 
} 
