import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Iss} from './iss'; 

@Injectable({ providedIn: 'root' }) 
export class IssService extends CommonsService<Iss> { 

     getPathModule(): string { 
         return 'iss'; 
     } 
} 
