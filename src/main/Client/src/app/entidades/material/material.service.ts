import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Material} from './material'; 

@Injectable({ providedIn: 'root' }) 
export class MaterialService extends CommonsService<Material> { 

     getPathModule(): string { 
         return 'material'; 
     } 
} 
