import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Cliente} from './cliente'; 

@Injectable({ providedIn: 'root' }) 
export class ClienteService extends CommonsService<Cliente> { 

     getPathModule(): string { 
         return 'cliente'; 
     } 
} 
