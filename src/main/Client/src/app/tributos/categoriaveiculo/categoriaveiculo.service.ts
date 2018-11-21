import {CommonsService} from '../../commons-service'; 
import {Injectable} from "@angular/core";
import {CategoriaVeiculo} from './categoriaveiculo'; 

@Injectable({ providedIn: 'root' }) 
export class CategoriaVeiculoService extends CommonsService<CategoriaVeiculo> { 

     getPathModule(): string { 
         return 'categoriaveiculo'; 
     } 
} 
