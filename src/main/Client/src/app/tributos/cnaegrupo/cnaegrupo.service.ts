import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeGrupo} from './cnaegrupo'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeGrupoService extends CommonsService<CnaeGrupo> { 

     getPathModule(): string { 
         return 'cnaegrupo'; 
     } 
} 
