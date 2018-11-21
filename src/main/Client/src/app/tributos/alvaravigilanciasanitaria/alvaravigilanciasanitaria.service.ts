import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {AlvaraVigilanciaSanitaria} from './alvaravigilanciasanitaria'; 

@Injectable({ providedIn: 'root' }) 
export class AlvaraVigilanciaSanitariaService extends CommonsService<AlvaraVigilanciaSanitaria> { 

     getPathModule(): string { 
         return 'alvaravigilanciasanitaria'; 
     } 
} 
