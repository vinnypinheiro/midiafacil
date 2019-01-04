import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Peca} from './peca'; 

@Injectable({ providedIn: 'root' }) 
export class PecaService extends CommonsService<Peca> { 

     getPathModule(): string { 
         return 'peca'; 
     } 
} 
