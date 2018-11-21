import {DomainBase} from '../../utils/utils'; 

export interface CertidaoEmitida extends DomainBase { 

  certidaoemitida_tipocontribuinte: string;
  certidaoemitida_datainicio: Date;
  certidaoemitida_datafim: Date;
  certidaoemitida_numero: string;
  certidaoemitida_hashcontrol: string;
  certidaoemitida_obs: string;

  referencia_id: number;
  referencia_nome: string;
  referencia_codigo: string;

  tipocertidao_id :  number;
  tipocertidao_nome :  string;
  tipocertidao_codigo :  string;
}
