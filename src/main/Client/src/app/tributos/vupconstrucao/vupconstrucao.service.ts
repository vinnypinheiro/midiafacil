import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {VupConstrucao} from './vupconstrucao'; 

@Injectable({ providedIn: 'root' }) 
export class VupConstrucaoService extends CommonsService<VupConstrucao> { 

     getPathModule(): string { 
         return 'vupconstrucao'; 
     } 
} 
