import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {ModuloServicoTomadoDebito} from './moduloservicotomadodebito'; 

@Injectable({ providedIn: 'root' }) 
export class ModuloServicoTomadoDebitoService extends CommonsService<ModuloServicoTomadoDebito> { 

     getPathModule(): string { 
         return 'moduloservicotomadodebito'; 
     } 
} 
