import {DomainBase} from '../../utils/utils'; 

export interface Departamento extends DomainBase { 

  departamento_id: number;
  departamento_codigo: string;
  departamento_nome: string;

  unidadegestora_id :  number;
  unidadegestora_nome :  string;
  unidadegestora_codigo :  string;
}
