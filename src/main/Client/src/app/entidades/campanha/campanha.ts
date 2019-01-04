import {DomainBase} from '../../utils/utils';
import {Cliente} from "../cliente/cliente";

export interface Campanha extends DomainBase { 

     datafim: Date; 
     datainicio: Date;
     nome: string;
     cliente_id:  Cliente;


}