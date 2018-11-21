import {DomainBase} from '../../utils/utils'; 

export interface AlvaraEmitido extends DomainBase { 

  alvaraemitido_tipocontribuinte: string;
  alvaraemitido_datainicio: Date;
  alvaraemitido_datafim: Date;
  alvaraemitido_numero: string;
  alvaraemitido_hashcontrol: string;
  alvaraemitido_obs: string;

  referencia_id: number;
  referencia_nome :  string;
  referencia_codigo :  string;

  engenheiro_id :  number;
  engenheiro_nome :  string;
  engenheiro_codigo :  string;

  tipoalvara_id :  number;
  tipoalvara_nome :  string;
  tipoalvara_codigo :  string;

  tipousoalvara_id :  number;
  tipousoalvara_nome :  string;
  tipousoalvara_codigo :  string;

  status_id :  number;
  status_nome :  string;
  status_codigo :  string;
}
