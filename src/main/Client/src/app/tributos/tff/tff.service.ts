import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Tff} from './tff'; 

@Injectable({ providedIn: 'root' }) 
export class TffService extends CommonsService<Tff> { 

     getPathModule(): string { 
         return 'tff'; 
     } 
} 
