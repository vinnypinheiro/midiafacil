import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PlanoMidia} from './planomidia'; 

@Injectable({ providedIn: 'root' }) 
export class PlanoMidiaService extends CommonsService<PlanoMidia> { 

     getPathModule(): string { 
         return 'planomidia'; 
     } 
} 
