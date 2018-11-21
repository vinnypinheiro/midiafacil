import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Loteamento} from '../loteamento'; 
import {LoteamentoService} from '../loteamento.service'; 

@Component({ 
  selector: 'gov-loteamento-grid', 
  templateUrl: './loteamento-grid.component.html', 
  //styleUrls: ['./loteamento-grid.component.css'] 
}) 
export class LoteamentoGridComponent extends CommonsGrid<Loteamento> implements OnInit { 

     constructor(apiService: LoteamentoService, router: Router) { 
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
         filterData.order = 'trb_loteamento.datacadastro, trb_loteamento.codigo, trb_loteamento.nome, trb_loteamento.trb_contribuinte_id, trb_loteamento.quantidadeunidades, trb_loteamento.areagleba, trb_loteamento.areapreservacao, trb_loteamento.areatotal, trb_loteamento.trb_bairro_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_loteamento'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_loteamento' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datacadastro','datacadastro','DATE'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         retorno[3] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[4] = new FieldSearch('quantidadeunidades','quantidadeunidades','NUMBER'); 
         retorno[5] = new FieldSearch('areagleba','areagleba','NUMBER'); 
         retorno[6] = new FieldSearch('areapreservacao','areapreservacao','NUMBER'); 
         retorno[7] = new FieldSearch('areatotal','areatotal','NUMBER'); 
         retorno[8] = new FieldSearch('trb_bairro_id','trb_bairro_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}