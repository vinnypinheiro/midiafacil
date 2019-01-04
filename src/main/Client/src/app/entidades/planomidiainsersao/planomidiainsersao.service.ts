import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PlanoMidiaInsersao} from './planomidiainsersao'; 

@Injectable({ providedIn: 'root' }) 
export class PlanoMidiaInsersaoService extends CommonsService<PlanoMidiaInsersao> { 

     getPathModule(): string { 
         return 'planomidiainsersao'; 
     } 
} 
