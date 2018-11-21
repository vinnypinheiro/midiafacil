import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoConcessao} from '../tipoconcessao'; 
import {TipoConcessaoService} from '../tipoconcessao.service'; 

@Component({ 
  selector: 'gov-tipoconcessao-grid', 
  templateUrl: './tipoconcessao-grid.component.html', 
  //styleUrls: ['./tipoconcessao-grid.component.css'] 
}) 
export class TipoConcessaoGridComponent extends CommonsGrid<TipoConcessao> implements OnInit { 

     constructor(apiService: TipoConcessaoService, router: Router) { 
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
         filterData.order = 'trb_tipoconcessao.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipoconcessao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipoconcessao' ; 
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