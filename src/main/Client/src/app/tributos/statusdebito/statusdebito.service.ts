import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {StatusDebito} from './statusdebito'; 

@Injectable({ providedIn: 'root' }) 
export class StatusDebitoService extends CommonsService<StatusDebito> { 

     getPathModule(): string { 
         return 'statusdebito'; 
     } 
} 
