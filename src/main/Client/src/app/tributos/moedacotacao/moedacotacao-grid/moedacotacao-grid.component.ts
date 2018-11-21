import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {MoedaCotacao} from '../moedacotacao'; 
import {MoedaCotacaoService} from '../moedacotacao.service'; 

@Component({ 
  selector: 'gov-moedacotacao-grid', 
  templateUrl: './moedacotacao-grid.component.html', 
  //styleUrls: ['./moedacotacao-grid.component.css'] 
}) 
export class MoedaCotacaoGridComponent extends CommonsGrid<MoedaCotacao> implements OnInit { 

     constructor(apiService: MoedaCotacaoService, router: Router) { 
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
         filterData.order = 'trb_moedacotacao.trb_moeda_id, trb_moedacotacao.datacotacao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_moedacotacao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_moedacotacao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_moeda_id','trb_moeda_id','ENUM'); 
         retorno[1] = new FieldSearch('datacotacao','datacotacao','DATE'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}