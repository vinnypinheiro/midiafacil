import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PadraoConstrutivo} from './padraoconstrutivo'; 

@Injectable({ providedIn: 'root' }) 
export class PadraoConstrutivoService extends CommonsService<PadraoConstrutivo> { 

     getPathModule(): string { 
         return 'padraoconstrutivo'; 
     } 
} 
