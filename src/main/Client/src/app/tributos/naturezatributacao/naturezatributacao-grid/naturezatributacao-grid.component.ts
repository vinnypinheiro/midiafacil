import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {NaturezaTributacao} from '../naturezatributacao'; 
import {NaturezaTributacaoService} from '../naturezatributacao.service'; 

@Component({ 
  selector: 'gov-naturezatributacao-grid', 
  templateUrl: './naturezatributacao-grid.component.html', 
  //styleUrls: ['./naturezatributacao-grid.component.css'] 
}) 
export class NaturezaTributacaoGridComponent extends CommonsGrid<NaturezaTributacao> implements OnInit { 

     constructor(apiService: NaturezaTributacaoService, router: Router) { 
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
         filterData.order = 'trb_naturezatributacao.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_naturezatributacao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_naturezatributacao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}