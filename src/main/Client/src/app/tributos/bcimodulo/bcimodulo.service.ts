import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {BciModulo} from './bcimodulo'; 

@Injectable({ providedIn: 'root' }) 
export class BciModuloService extends CommonsService<BciModulo> { 

     getPathModule(): string { 
         return 'bcimodulo'; 
     } 
} 
