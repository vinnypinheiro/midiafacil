import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {FormatoRevista} from './formatorevista'; 

@Injectable({ providedIn: 'root' }) 
export class FormatoRevistaService extends CommonsService<FormatoRevista> { 

     getPathModule(): string { 
         return 'formatorevista'; 
     } 
} 
