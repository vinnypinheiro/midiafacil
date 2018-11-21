import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Concessao} from './concessao'; 

@Injectable({ providedIn: 'root' }) 
export class ConcessaoService extends CommonsService<Concessao> { 

     getPathModule(): string { 
         return 'concessao'; 
     } 
} 
