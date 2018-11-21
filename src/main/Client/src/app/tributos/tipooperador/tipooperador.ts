import {DomainBase} from '../../utils/utils'; 

export interface TipoOperador extends DomainBase {
  tipooperador_id: number;
  tipooperador_codigo: string;
  tipooperador_nome: string;
}
