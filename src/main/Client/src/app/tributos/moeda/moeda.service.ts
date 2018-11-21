import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Moeda} from './moeda'; 

@Injectable({ providedIn: 'root' }) 
export class MoedaService extends CommonsService<Moeda> { 

     getPathModule(): string { 
         return 'moeda'; 
     } 
} 
