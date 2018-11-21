import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Su} from '../su'; 
import {SuService} from '../su.service'; 

@Component({ 
  selector: 'gov-su-grid', 
  templateUrl: './su-grid.component.html', 
  //styleUrls: ['./su-grid.component.css'] 
}) 
export class SuGridComponent extends CommonsGrid<Su> implements OnInit { 

     constructor(apiService: SuService, router: Router) { 
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
         filterData.order = 'trb_su.trb_logradouro_id, trb_su.trb_imovel_id, trb_su.trb_setor_id, trb_su.tipounidade, trb_su.areaconstrucao, trb_su.areaterreno, trb_su.fatorconstrucao, trb_su.fatorterreno, trb_su.fracaoideal, trb_su.valorvenalconstrucao, trb_su.valorvenalexcedente, trb_su.valorvenalterreno, trb_su.vupconstrucao, trb_su.vupterreno, trb_su.datalancamento, trb_su.ano, trb_su.aliquota, trb_su.aliquotareferencia, trb_su.basecalculo, trb_su.qtdparcela, trb_su.valor, trb_su.valorparcela, trb_su.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_su'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_su' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_logradouro_id','trb_logradouro_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_imovel_id','trb_imovel_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_setor_id','trb_setor_id','ENUM'); 
         retorno[3] = new FieldSearch('tipounidade','tipounidade','NUMBER'); 
         retorno[4] = new FieldSearch('areaconstrucao','areaconstrucao','NUMBER'); 
         retorno[5] = new FieldSearch('areaterreno','areaterreno','NUMBER'); 
         retorno[6] = new FieldSearch('fatorconstrucao','fatorconstrucao','NUMBER'); 
         retorno[7] = new FieldSearch('fatorterreno','fatorterreno','NUMBER'); 
         retorno[8] = new FieldSearch('fracaoideal','fracaoideal','NUMBER'); 
         retorno[9] = new FieldSearch('valorvenalconstrucao','valorvenalconstrucao','NUMBER'); 
         retorno[10] = new FieldSearch('valorvenalexcedente','valorvenalexcedente','NUMBER'); 
         retorno[11] = new FieldSearch('valorvenalterreno','valorvenalterreno','NUMBER'); 
         retorno[12] = new FieldSearch('vupconstrucao','vupconstrucao','NUMBER'); 
         retorno[13] = new FieldSearch('vupterreno','vupterreno','NUMBER'); 
         retorno[14] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[15] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[16] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[17] = new FieldSearch('aliquotareferencia','aliquotareferencia','NUMBER'); 
         retorno[18] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[19] = new FieldSearch('qtdparcela','qtdparcela','NUMBER'); 
         retorno[20] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[21] = new FieldSearch('valorparcela','valorparcela','NUMBER'); 
         retorno[22] = new FieldSearch('numero','numero','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}