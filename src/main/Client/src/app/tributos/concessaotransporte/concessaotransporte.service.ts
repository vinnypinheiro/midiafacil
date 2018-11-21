import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ConcessaoTransporte} from './concessaotransporte'; 

@Injectable({ providedIn: 'root' }) 
export class ConcessaoTransporteService extends CommonsService<ConcessaoTransporte> { 

     getPathModule(): string { 
         return 'concessaotransporte'; 
     } 
} 
