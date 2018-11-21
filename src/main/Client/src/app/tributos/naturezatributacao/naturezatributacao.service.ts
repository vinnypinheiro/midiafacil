import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {NaturezaTributacao} from './naturezatributacao'; 

@Injectable({ providedIn: 'root' }) 
export class NaturezaTributacaoService extends CommonsService<NaturezaTributacao> { 

     getPathModule(): string { 
         return 'naturezatributacao'; 
     } 
} 
