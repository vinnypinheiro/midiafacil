import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Iptu} from './iptu'; 

@Injectable({ providedIn: 'root' }) 
export class IptuService extends CommonsService<Iptu> { 

     getPathModule(): string { 
         return 'iptu'; 
     } 
} 
