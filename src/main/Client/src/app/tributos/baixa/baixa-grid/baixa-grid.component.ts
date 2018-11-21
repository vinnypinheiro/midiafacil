import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Baixa} from '../baixa'; 
import {BaixaService} from '../baixa.service'; 

@Component({ 
  selector: 'gov-baixa-grid', 
  templateUrl: './baixa-grid.component.html', 
  //styleUrls: ['./baixa-grid.component.css'] 
}) 
export class BaixaGridComponent extends CommonsGrid<Baixa> implements OnInit { 

     constructor(apiService: BaixaService, router: Router) { 
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
         filterData.order = 'trb_baixa.datacredito, trb_baixa.trb_tipobaixa_id, trb_baixa.trb_baixastatus_id, trb_baixa.trb_contabancaria_id, trb_baixa.trb_receita_id, trb_baixa.trb_debitoparcela_id, trb_baixa.trb_creditobancarioitem_id, trb_baixa.trb_emissaocobrancaitem_id, trb_baixa.valoremissao, trb_baixa.valororiginal, trb_baixa.juros, trb_baixa.multa, trb_baixa.correcao, trb_baixa.desconto, trb_baixa.honorarioadvocaticio, trb_baixa.valorrecebido, trb_baixa.morasbancarias, trb_baixa.jurosreceita, trb_baixa.jurosdividaativa ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_baixa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_baixa' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datacredito','datacredito','DATE'); 
         retorno[1] = new FieldSearch('trb_tipobaixa_id','trb_tipobaixa_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_baixastatus_id','trb_baixastatus_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_contabancaria_id','trb_contabancaria_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_receita_id','trb_receita_id','ENUM'); 
         retorno[5] = new FieldSearch('trb_debitoparcela_id','trb_debitoparcela_id','ENUM'); 
         retorno[6] = new FieldSearch('trb_creditobancarioitem_id','trb_creditobancarioitem_id','ENUM'); 
         retorno[7] = new FieldSearch('trb_emissaocobrancaitem_id','trb_emissaocobrancaitem_id','ENUM'); 
         retorno[8] = new FieldSearch('valoremissao','valoremissao','NUMBER'); 
         retorno[9] = new FieldSearch('valororiginal','valororiginal','NUMBER'); 
         retorno[10] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[11] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[12] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[13] = new FieldSearch('desconto','desconto','NUMBER'); 
         retorno[14] = new FieldSearch('honorarioadvocaticio','honorarioadvocaticio','NUMBER'); 
         retorno[15] = new FieldSearch('valorrecebido','valorrecebido','NUMBER'); 
         retorno[16] = new FieldSearch('morasbancarias','morasbancarias','NUMBER'); 
         retorno[17] = new FieldSearch('jurosreceita','jurosreceita','STRING'); 
         retorno[18] = new FieldSearch('jurosdividaativa','jurosdividaativa','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}