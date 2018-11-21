import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ServicoGrupo} from './servicogrupo'; 

@Injectable({ providedIn: 'root' }) 
export class ServicoGrupoService extends CommonsService<ServicoGrupo> { 

     getPathModule(): string { 
         return 'servicogrupo'; 
     } 
} 
