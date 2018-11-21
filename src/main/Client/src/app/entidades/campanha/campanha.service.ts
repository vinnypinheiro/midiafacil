import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Campanha} from './campanha'; 

@Injectable({ providedIn: 'root' }) 
export class CampanhaService extends CommonsService<Campanha> { 

     getPathModule(): string { 
         return 'campanha'; 
     } 
} 
