import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Cnae} from './cnae'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeService extends CommonsService<Cnae> { 

     getPathModule(): string { 
         return 'cnae'; 
     } 
} 
