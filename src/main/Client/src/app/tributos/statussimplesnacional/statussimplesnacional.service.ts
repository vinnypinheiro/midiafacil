import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {StatusSimplesNacional} from './statussimplesnacional'; 

@Injectable({ providedIn: 'root' }) 
export class StatusSimplesNacionalService extends CommonsService<StatusSimplesNacional> { 

     getPathModule(): string { 
         return 'statussimplesnacional'; 
     } 
} 
