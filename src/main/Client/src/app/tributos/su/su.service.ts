import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Su} from './su'; 

@Injectable({ providedIn: 'root' }) 
export class SuService extends CommonsService<Su> { 

     getPathModule(): string { 
         return 'su'; 
     } 
} 
