import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Engenheiro} from './engenheiro'; 

@Injectable({ providedIn: 'root' }) 
export class EngenheiroService extends CommonsService<Engenheiro> { 

     getPathModule(): string { 
         return 'engenheiro'; 
     } 
} 
