import {DomainBase} from '../../utils/utils'; 

export interface Cidade extends DomainBase {

  cidade_id: number;
  cidade_codigo: string;
  cidade_nome: string;

  uf_id :  number;
  uf_nome :  string;
  uf_codigo :  string;
}
