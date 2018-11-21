import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CreditoBancarioItem} from './creditobancarioitem'; 

@Injectable({ providedIn: 'root' }) 
export class CreditoBancarioItemService extends CommonsService<CreditoBancarioItem> { 

     getPathModule(): string { 
         return 'creditobancarioitem'; 
     } 
} 
