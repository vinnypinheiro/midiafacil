import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {DebitoParcela} from './debitoparcela'; 

@Injectable({ providedIn: 'root' }) 
export class DebitoParcelaService extends CommonsService<DebitoParcela> { 

     getPathModule(): string { 
         return 'debitoparcela'; 
     } 
} 
