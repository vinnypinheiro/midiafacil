import {DomainBase} from '../../utils/utils'; 

export interface Socio extends DomainBase { 

     trb_empresa_id_id :  number; 
     trb_empresa_id_nome :  string; 
     trb_empresa_id_codigo :  string; 
     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     socio_cargo: string; 
     socio_datainicio: Date; 
     socio_datafim: Date; 
     socio_representante: boolean; 
     socio_participacao: number; 
}