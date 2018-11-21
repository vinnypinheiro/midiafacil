import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Habitese} from './habitese'; 

@Injectable({ providedIn: 'root' }) 
export class HabiteseService extends CommonsService<Habitese> { 

     getPathModule(): string { 
         return 'habitese'; 
     } 
} 
