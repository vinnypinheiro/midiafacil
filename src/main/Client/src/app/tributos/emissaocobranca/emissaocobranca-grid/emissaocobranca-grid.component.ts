import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {EmissaoCobranca} from '../emissaocobranca'; 
import {EmissaoCobrancaService} from '../emissaocobranca.service'; 

@Component({ 
  selector: 'gov-emissaocobranca-grid', 
  templateUrl: './emissaocobranca-grid.component.html', 
  //styleUrls: ['./emissaocobranca-grid.component.css'] 
}) 
export class EmissaoCobrancaGridComponent extends CommonsGrid<EmissaoCobranca> implements OnInit { 

     constructor(apiService: EmissaoCobrancaService, router: Router) { 
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
         filterData.order = 'trb_emissaocobranca.trb_referencia_id, trb_emissaocobranca.trb_bancocontrato_id, trb_emissaocobranca.numero, trb_emissaocobranca.dataemissao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_emissaocobranca'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_emissaocobranca' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[1] = new FieldSearch('trb_bancocontrato_id','trb_bancocontrato_id','ENUM'); 
         retorno[2] = new FieldSearch('numero','numero','STRING'); 
         retorno[3] = new FieldSearch('dataemissao','dataemissao','DATE'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}