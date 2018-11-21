import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeServico} from './cnaeservico'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeServicoService extends CommonsService<CnaeServico> { 

     getPathModule(): string { 
         return 'cnaeservico'; 
     } 
} 
