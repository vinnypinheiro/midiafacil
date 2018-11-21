import {DomainBase} from '../../utils/utils'; 

export interface CnaeClasse extends DomainBase { 

  cnaeclasse_id: number;
  cnaeclasse_codigo: string;
  cnaeclasse_nome: string;

  cnaegrupo_id :  number;
  cnaegrupo_nome :  string;
  cnaegrupo_codigo :  string;
}
