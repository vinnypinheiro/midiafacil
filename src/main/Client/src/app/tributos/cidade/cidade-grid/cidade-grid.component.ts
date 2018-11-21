import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Cidade} from '../cidade'; 
import {CidadeService} from '../cidade.service'; 

@Component({ 
  selector: 'gov-cidade-grid', 
  templateUrl: './cidade-grid.component.html', 
  //styleUrls: ['./cidade-grid.component.css'] 
}) 
export class CidadeGridComponent extends CommonsGrid<Cidade> implements OnInit { 

    constructor(apiService: CidadeService, router: Router) {
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
        filterData.order = 'trb_uf.nome, trb_cidade.codigo '
        return filterData;
    }

    getRowFilter(): FilterData {
        let filter= this.buildRowFilter('trb_cidade');
        filter.whereClauses[0].dataType='INTEGER';
        return filter;
    }

    getTableName(): string {
        return 'trb_cidade' ;
    }

    getFieldList(): FieldSearch[] {
        let retorno = [];
        retorno[0] = new FieldSearch('trb_uf_id','trb_uf_id','ENUM');
        retorno[1] = new FieldSearch('codigo','codigo','STRING');
        return retorno;
    }

    getReportList():ReportGroup[]{
      return [];
    }
}
