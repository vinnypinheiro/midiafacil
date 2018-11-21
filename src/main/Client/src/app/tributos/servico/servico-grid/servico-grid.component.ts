import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Servico} from '../servico'; 
import {ServicoService} from '../servico.service'; 

@Component({ 
  selector: 'gov-servico-grid', 
  templateUrl: './servico-grid.component.html', 
  //styleUrls: ['./servico-grid.component.css'] 
}) 
export class ServicoGridComponent extends CommonsGrid<Servico> implements OnInit { 

     constructor(apiService: ServicoService, router: Router) { 
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
         filterData.order = 'trb_servico.trb_servicogrupo_id, trb_servico.codigo, trb_servico.nome, trb_servico.aliquota, trb_servico.simplesnacional ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_servico'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_servico' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_servicogrupo_id','trb_servicogrupo_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         retorno[3] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[4] = new FieldSearch('simplesnacional','simplesnacional','BOOLEAN'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}