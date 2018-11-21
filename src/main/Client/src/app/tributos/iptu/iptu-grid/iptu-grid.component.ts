import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Iptu} from '../iptu'; 
import {IptuService} from '../iptu.service'; 

@Component({ 
  selector: 'gov-iptu-grid', 
  templateUrl: './iptu-grid.component.html', 
  //styleUrls: ['./iptu-grid.component.css'] 
}) 
export class IptuGridComponent extends CommonsGrid<Iptu> implements OnInit { 

     constructor(apiService: IptuService, router: Router) { 
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
         filterData.order = 'trb_iptu.datalancamento, trb_iptu.ano, trb_iptu.trb_imovel_id, trb_iptu.trb_logradouro_id, trb_iptu.trb_setor_id, trb_iptu.numero, trb_iptu.basecalculo, trb_iptu.qtdparcela, trb_iptu.aliquota, trb_iptu.aliquotareferencia, trb_iptu.valor, trb_iptu.valorparcela, trb_iptu.areaconstrucao, trb_iptu.areaterreno, trb_iptu.fatorconstrucao, trb_iptu.fatorterreno, trb_iptu.fracaoideal, trb_iptu.tipounidade, trb_iptu.valorvenalconstrucao, trb_iptu.valorvenalexcedente, trb_iptu.valorvenalterreno, trb_iptu.vupconstrucao, trb_iptu.vupterreno ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_iptu'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_iptu' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[1] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[2] = new FieldSearch('trb_imovel_id','trb_imovel_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_logradouro_id','trb_logradouro_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_setor_id','trb_setor_id','ENUM'); 
         retorno[5] = new FieldSearch('numero','numero','NUMBER'); 
         retorno[6] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[7] = new FieldSearch('qtdparcela','qtdparcela','NUMBER'); 
         retorno[8] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[9] = new FieldSearch('aliquotareferencia','aliquotareferencia','NUMBER'); 
         retorno[10] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[11] = new FieldSearch('valorparcela','valorparcela','NUMBER'); 
         retorno[12] = new FieldSearch('areaconstrucao','areaconstrucao','NUMBER'); 
         retorno[13] = new FieldSearch('areaterreno','areaterreno','NUMBER'); 
         retorno[14] = new FieldSearch('fatorconstrucao','fatorconstrucao','NUMBER'); 
         retorno[15] = new FieldSearch('fatorterreno','fatorterreno','NUMBER'); 
         retorno[16] = new FieldSearch('fracaoideal','fracaoideal','NUMBER'); 
         retorno[17] = new FieldSearch('tipounidade','tipounidade','NUMBER'); 
         retorno[18] = new FieldSearch('valorvenalconstrucao','valorvenalconstrucao','NUMBER'); 
         retorno[19] = new FieldSearch('valorvenalexcedente','valorvenalexcedente','NUMBER'); 
         retorno[20] = new FieldSearch('valorvenalterreno','valorvenalterreno','NUMBER'); 
         retorno[21] = new FieldSearch('vupconstrucao','vupconstrucao','NUMBER'); 
         retorno[22] = new FieldSearch('vupterreno','vupterreno','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}