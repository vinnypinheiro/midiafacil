import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {DividaAtivaItem} from './dividaativaitem'; 

@Injectable({ providedIn: 'root' }) 
export class DividaAtivaItemService extends CommonsService<DividaAtivaItem> { 

     getPathModule(): string { 
         return 'dividaativaitem'; 
     } 
} 
