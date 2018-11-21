import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Tributo} from '../tributo'; 
import {TributoService} from '../tributo.service'; 

@Component({ 
  selector: 'gov-tributo-grid', 
  templateUrl: './tributo-grid.component.html', 
  //styleUrls: ['./tributo-grid.component.css'] 
}) 
export class TributoGridComponent extends CommonsGrid<Tributo> implements OnInit { 

     constructor(apiService: TributoService, router: Router) { 
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
         filterData.order = 'trb_tributo.codigo, trb_tributo.nome';
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tributo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tributo' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('nome','nome','STRING'); 
         retorno[2] = new FieldSearch('nomereduzido','nomereduzido','STRING'); 
         retorno[3] = new FieldSearch('trb_receita_id','trb_receita_id','ENUM'); 
         retorno[4] = new FieldSearch('jurosreceita','jurosreceita','STRING'); 
         retorno[5] = new FieldSearch('dividaativa','dividaativa','STRING'); 
         retorno[6] = new FieldSearch('jurosdividaativa','jurosdividaativa','STRING'); 
         return retorno; 
     } 

    getReportList():ReportGroup[]{
      return [];
    }
}
