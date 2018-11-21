import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {TipoMidiaDigital} from './tipomidiadigital'; 

@Injectable({ providedIn: 'root' }) 
export class TipoMidiaDigitalService extends CommonsService<TipoMidiaDigital> { 

     getPathModule(): string { 
         return 'tipomidiadigital'; 
     } 
} 
