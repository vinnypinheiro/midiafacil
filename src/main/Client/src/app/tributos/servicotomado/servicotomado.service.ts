import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ServicoTomado} from './servicotomado'; 

@Injectable({ providedIn: 'root' }) 
export class ServicoTomadoService extends CommonsService<ServicoTomado> { 

     getPathModule(): string { 
         return 'servicotomado'; 
     } 
} 
