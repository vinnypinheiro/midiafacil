import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeDivisao} from './cnaedivisao'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeDivisaoService extends CommonsService<CnaeDivisao> { 

     getPathModule(): string { 
         return 'cnaedivisao'; 
     } 
} 
