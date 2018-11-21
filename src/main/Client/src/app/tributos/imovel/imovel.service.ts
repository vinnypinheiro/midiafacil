import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {Imovel} from './imovel'; 

@Injectable({ providedIn: 'root' }) 
export class ImovelService extends CommonsService<Imovel> { 

     getPathModule(): string { 
         return 'imovel'; 
     } 
} 
