import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Itiv} from '../itiv'; 
import {ItivService} from '../itiv.service'; 

@Component({ 
  selector: 'gov-itiv-grid', 
  templateUrl: './itiv-grid.component.html', 
  //styleUrls: ['./itiv-grid.component.css'] 
}) 
export class ItivGridComponent extends CommonsGrid<Itiv> implements OnInit { 

     constructor(apiService: ItivService, router: Router) { 
         super(apiService, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     onNavigateClick(filterData: FilterData): void { 
         this.loadByFilter(filterData); 
     } 

     getDefaultFilter(): FilterData { 
         const filterData = super.getDefaultFilter(); 
         filterData.order = 'trb_itiv.datalancamento, trb_itiv.ano, trb_itiv.trb_imovel_id, trb_itiv.trb_cartorio_id, trb_itiv.trb_tramitente_id, trb_itiv.trb_adquirente_id, trb_itiv.numero, trb_itiv.itivnatureza, trb_itiv.areaconstrucao, trb_itiv.registro, trb_itiv.folha, trb_itiv.livro, trb_itiv.status, trb_itiv.trb_motivostatus_id, trb_itiv.hashcontrol, trb_itiv.areaterreno, trb_itiv.aliquotaavista, trb_itiv.aliquotafinanciado, trb_itiv.valoravista, trb_itiv.valorfinanciado, trb_itiv.valorimposto, trb_itiv.valorvenalterreno, trb_itiv.valorvenalconstrucao, trb_itiv.valorvenalexcedente, trb_itiv.valorvenaltotal ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_itiv'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_itiv' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[1] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[2] = new FieldSearch('trb_imovel_id','trb_imovel_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_cartorio_id','trb_cartorio_id','NUMBER'); 
         retorno[4] = new FieldSearch('trb_tramitente_id','trb_tramitente_id','ENUM'); 
         retorno[5] = new FieldSearch('trb_adquirente_id','trb_adquirente_id','ENUM'); 
         retorno[6] = new FieldSearch('numero','numero','STRING'); 
         retorno[7] = new FieldSearch('itivnatureza','itivnatureza','NUMBER'); 
         retorno[8] = new FieldSearch('areaconstrucao','areaconstrucao','NUMBER'); 
         retorno[9] = new FieldSearch('registro','registro','STRING'); 
         retorno[10] = new FieldSearch('folha','folha','STRING'); 
         retorno[11] = new FieldSearch('livro','livro','STRING'); 
         retorno[12] = new FieldSearch('status','status','STRING'); 
         retorno[13] = new FieldSearch('trb_motivostatus_id','trb_motivostatus_id','NUMBER'); 
         retorno[14] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         retorno[15] = new FieldSearch('areaterreno','areaterreno','NUMBER'); 
         retorno[16] = new FieldSearch('aliquotaavista','aliquotaavista','NUMBER'); 
         retorno[17] = new FieldSearch('aliquotafinanciado','aliquotafinanciado','NUMBER'); 
         retorno[18] = new FieldSearch('valoravista','valoravista','NUMBER'); 
         retorno[19] = new FieldSearch('valorfinanciado','valorfinanciado','NUMBER'); 
         retorno[20] = new FieldSearch('valorimposto','valorimposto','NUMBER'); 
         retorno[21] = new FieldSearch('valorvenalterreno','valorvenalterreno','NUMBER'); 
         retorno[22] = new FieldSearch('valorvenalconstrucao','valorvenalconstrucao','NUMBER'); 
         retorno[23] = new FieldSearch('valorvenalexcedente','valorvenalexcedente','NUMBER'); 
         retorno[24] = new FieldSearch('valorvenaltotal','valorvenaltotal','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}