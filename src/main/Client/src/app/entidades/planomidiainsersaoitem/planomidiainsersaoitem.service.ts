import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {PlanoMidiaInsersaoItem} from './planomidiainsersaoitem'; 

@Injectable({ providedIn: 'root' }) 
export class PlanoMidiaInsersaoItemService extends CommonsService<PlanoMidiaInsersaoItem> { 

     getPathModule(): string { 
         return 'planomidiainsersaoitem'; 
     } 
} 
