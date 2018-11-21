import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {RamoAtividade} from './ramoatividade'; 

@Injectable({ providedIn: 'root' }) 
export class RamoAtividadeService extends CommonsService<RamoAtividade> { 

     getPathModule(): string { 
         return 'ramoatividade'; 
     } 
} 
