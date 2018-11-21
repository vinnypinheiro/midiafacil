import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CnaeLicenca} from './cnaelicenca'; 

@Injectable({ providedIn: 'root' }) 
export class CnaeLicencaService extends CommonsService<CnaeLicenca> { 

     getPathModule(): string { 
         return 'cnaelicenca'; 
     } 
} 
