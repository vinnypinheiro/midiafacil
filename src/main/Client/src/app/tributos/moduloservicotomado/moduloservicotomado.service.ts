import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ModuloServicoTomado} from './moduloservicotomado'; 

@Injectable({ providedIn: 'root' }) 
export class ModuloServicoTomadoService extends CommonsService<ModuloServicoTomado> { 

     getPathModule(): string { 
         return 'moduloservicotomado'; 
     } 
} 
