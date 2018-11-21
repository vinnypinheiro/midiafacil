import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {SimplesNacional} from './simplesnacional'; 

@Injectable({ providedIn: 'root' }) 
export class SimplesNacionalService extends CommonsService<SimplesNacional> { 

     getPathModule(): string { 
         return 'simplesnacional'; 
     } 
} 
