import {DomainBase} from '../../utils/utils'; 

export interface HistoricoSimplesNacional extends DomainBase { 

     historicosimplesnacional_codigo: string; 
     historicosimplesnacional_datafim: Date; 
     historicosimplesnacional_datainicio: Date; 
     historicosimplesnacional_detalhamento: string; 
     trb_statussimplesnacional_id_id :  number; 
     trb_statussimplesnacional_id_nome :  string; 
     trb_statussimplesnacional_id_codigo :  string; 
}