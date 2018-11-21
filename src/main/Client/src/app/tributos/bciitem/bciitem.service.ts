import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {BciItem} from './bciitem'; 

@Injectable({ providedIn: 'root' }) 
export class BciItemService extends CommonsService<BciItem> { 

     getPathModule(): string { 
         return 'bciitem'; 
     } 
} 
