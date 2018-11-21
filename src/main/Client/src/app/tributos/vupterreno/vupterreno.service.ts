import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {VupTerreno} from './vupterreno'; 

@Injectable({ providedIn: 'root' }) 
export class VupTerrenoService extends CommonsService<VupTerreno> { 

     getPathModule(): string { 
         return 'vupterreno'; 
     } 
} 
