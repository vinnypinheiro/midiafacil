import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {LocalConcessaoBox} from './localconcessaobox'; 

@Injectable({ providedIn: 'root' }) 
export class LocalConcessaoBoxService extends CommonsService<LocalConcessaoBox> { 

     getPathModule(): string { 
         return 'localconcessaobox'; 
     } 
} 
