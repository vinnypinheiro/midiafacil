import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ConcessaoBox} from './concessaobox'; 

@Injectable({ providedIn: 'root' }) 
export class ConcessaoBoxService extends CommonsService<ConcessaoBox> { 

     getPathModule(): string { 
         return 'concessaobox'; 
     } 
} 
