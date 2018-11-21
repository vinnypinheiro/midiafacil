import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {AlvaraMeioAmbiente} from './alvarameioambiente'; 

@Injectable({ providedIn: 'root' }) 
export class AlvaraMeioAmbienteService extends CommonsService<AlvaraMeioAmbiente> { 

     getPathModule(): string { 
         return 'alvarameioambiente'; 
     } 
} 
