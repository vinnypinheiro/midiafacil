import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Peca} from '../peca'; 
import {PecaService} from '../peca.service'; 

@Component({ 
  selector: 'gov-peca-grid', 
  templateUrl: './peca-grid.component.html', 
  //styleUrls: ['./peca-grid.component.css'] 
}) 
export class PecaGridComponent extends CommonsGrid<Peca> implements OnInit { 

     constructor(apiService: PecaService, router: Router) { 
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
         filterData.order = 'peca.centimetros, peca.colunas, peca.duracao, peca.peca, peca.titulo, peca.formato_id, peca.formatorevista_id, peca.material_id, peca.planomidia_id, peca.tipomidia_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_peca'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'peca' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('centimetros','centimetros','LOOKUP'); 
         retorno[1] = new FieldSearch('colunas','colunas','STRING'); 
         retorno[2] = new FieldSearch('duracao','duracao','STRING'); 
         retorno[3] = new FieldSearch('peca','peca','STRING'); 
         retorno[4] = new FieldSearch('titulo','titulo','STRING'); 
         retorno[5] = new FieldSearch('formato_id','formato_id','ENUM'); 
         retorno[6] = new FieldSearch('formatorevista_id','formatorevista_id','ENUM'); 
         retorno[7] = new FieldSearch('material_id','material_id','ENUM'); 
         retorno[8] = new FieldSearch('planomidia_id','planomidia_id','ENUM'); 
         retorno[9] = new FieldSearch('tipomidia_id','tipomidia_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}