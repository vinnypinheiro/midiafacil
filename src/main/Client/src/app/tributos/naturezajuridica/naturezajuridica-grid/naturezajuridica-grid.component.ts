import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {NaturezaJuridica} from '../naturezajuridica'; 
import {NaturezaJuridicaService} from '../naturezajuridica.service'; 

@Component({ 
  selector: 'gov-naturezajuridica-grid', 
  templateUrl: './naturezajuridica-grid.component.html', 
  //styleUrls: ['./naturezajuridica-grid.component.css'] 
}) 
export class NaturezaJuridicaGridComponent extends CommonsGrid<NaturezaJuridica> implements OnInit { 

     constructor(apiService: NaturezaJuridicaService, router: Router) { 
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
         filterData.order = 'trb_naturezajuridica.codigo, trb_naturezajuridica.nome ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_naturezajuridica'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_naturezajuridica' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('nome','nome','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}