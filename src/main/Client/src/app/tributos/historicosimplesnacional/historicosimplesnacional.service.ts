import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {HistoricoSimplesNacional} from './historicosimplesnacional'; 

@Injectable({ providedIn: 'root' }) 
export class HistoricoSimplesNacionalService extends CommonsService<HistoricoSimplesNacional> { 

     getPathModule(): string { 
         return 'historicosimplesnacional'; 
     } 
} 
