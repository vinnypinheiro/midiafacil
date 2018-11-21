import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Tributo} from './tributo'; 

@Injectable({ providedIn: 'root' }) 
export class TributoService extends CommonsService<Tributo> { 

     getPathModule(): string { 
         return 'tributo'; 
     } 
} 
