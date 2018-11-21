import {DomainBase} from '../../utils/utils'; 

export interface NaturezaJuridica extends DomainBase {

  naturezajuridica_id: number;
  naturezajuridica_codigo: string;
  naturezajuridica_nome: string;
  naturezajuridica_naturezajuridicagrupo: number;
}
