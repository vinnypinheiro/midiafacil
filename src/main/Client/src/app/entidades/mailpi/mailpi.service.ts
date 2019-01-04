import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {MailPi} from './mailpi'; 

@Injectable({ providedIn: 'root' }) 
export class MailPiService extends CommonsService<MailPi> { 

     getPathModule(): string { 
         return 'mailpi'; 
     } 
} 
