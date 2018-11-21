import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Bairro} from './bairro'; 

@Injectable({ providedIn: 'root' }) 
export class BairroService extends CommonsService<Bairro> { 

     getPathModule(): string { 
         return 'bairro'; 
     } 
} 
