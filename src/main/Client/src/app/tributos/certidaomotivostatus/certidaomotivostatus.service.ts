import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CertidaoMotivoStatus} from './certidaomotivostatus'; 

@Injectable({ providedIn: 'root' }) 
export class CertidaoMotivoStatusService extends CommonsService<CertidaoMotivoStatus> { 

     getPathModule(): string { 
         return 'certidaomotivostatus'; 
     } 
} 
