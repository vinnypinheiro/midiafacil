import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {AlvaraEmitido} from './alvaraemitido'; 

@Injectable({ providedIn: 'root' }) 
export class AlvaraEmitidoService extends CommonsService<AlvaraEmitido> { 

     getPathModule(): string { 
         return 'alvaraemitido'; 
     } 
} 
