import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {BciGrupo} from './bcigrupo'; 

@Injectable({ providedIn: 'root' }) 
export class BciGrupoService extends CommonsService<BciGrupo> { 

     getPathModule(): string { 
         return 'bcigrupo'; 
     } 
} 
