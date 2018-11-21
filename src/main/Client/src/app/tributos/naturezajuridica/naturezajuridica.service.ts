import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {NaturezaJuridica} from './naturezajuridica'; 

@Injectable({ providedIn: 'root' }) 
export class NaturezaJuridicaService extends CommonsService<NaturezaJuridica> { 

     getPathModule(): string { 
         return 'naturezajuridica'; 
     } 
} 
