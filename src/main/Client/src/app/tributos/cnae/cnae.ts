import {DomainBase} from '../../utils/utils'; 

export interface Cnae extends DomainBase {

  cnae_id: number;
  cnae_codigo: string;
  cnae_nome: string;

  cnaeclasse_id :  number;
  cnaeclasse_nome :  string;
  cnaeclasse_codigo :  string;
}
