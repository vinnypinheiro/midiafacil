import {DomainBase} from '../../utils/utils'; 

export interface Bairro extends DomainBase { 

  bairro_id: string;
  bairro_codigo: string;
  bairro_nome: string;
  bairro_nomepopular: string;
}
