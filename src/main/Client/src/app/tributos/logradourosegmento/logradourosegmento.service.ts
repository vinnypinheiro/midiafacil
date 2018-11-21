import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {LogradouroSegmento} from './logradourosegmento'; 

@Injectable({ providedIn: 'root' }) 
export class LogradouroSegmentoService extends CommonsService<LogradouroSegmento> { 

     getPathModule(): string { 
         return 'logradourosegmento'; 
     } 
} 
