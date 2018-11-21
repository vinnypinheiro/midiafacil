import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Cnae} from '../cnae'; 
import {CnaeService} from '../cnae.service'; 

@Component({ 
  selector: 'gov-cnae-grid', 
  templateUrl: './cnae-grid.component.html', 
  //styleUrls: ['./cnae-grid.component.css'] 
}) 
export class CnaeGridComponent extends CommonsGrid<Cnae> implements OnInit { 

     constructor(apiService: CnaeService, router: Router) { 
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
         filterData.order = 'trb_cnae.nome, trb_cnae.codigo '
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnae'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnae' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnaeclasse_id','trb_cnaeclasse_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     }

    getReportList():ReportGroup[]{
        return [];
    }
}
