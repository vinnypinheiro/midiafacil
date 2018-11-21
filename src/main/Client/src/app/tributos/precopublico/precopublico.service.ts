import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PrecoPublico} from './precopublico'; 

@Injectable({ providedIn: 'root' }) 
export class PrecoPublicoService extends CommonsService<PrecoPublico> { 

     getPathModule(): string { 
         return 'precopublico'; 
     } 
} 
