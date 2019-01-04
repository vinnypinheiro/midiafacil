import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../../components/interfaces';
import {FieldSearch} from '../../../utils/utils';
import {CommonsGrid} from '../../../commons-grid';
import {ReportGroup} from '../../../shared/report-group';
import {TipoMidia} from '../tipomidia';
import {TipoMidiaService} from '../tipomidia.service';
import {fuseAnimations} from "../../../../@fuse/animations";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
    selector: 'gov-tipomidia-grid',
    templateUrl: './tipomidia-grid.component.html',
    styleUrls: ['./tipomidia-grid-component.scss'] ,
    animations   : fuseAnimations,
})
export class TipoMidiaGridComponent extends CommonsGrid<TipoMidia> implements OnInit {


    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','nome'];

    constructor(apiService: TipoMidiaService, router: Router) {
        super(apiService, router);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.loadByFilter(this.getDefaultFilter());
    }
    loadByFilter(filterData: FilterData) {
        this.apiService.loadByFilter(filterData).subscribe(response => {
            this.dataSource.data = response.content;

            this.activeBean = null;
        });
    }

    onNavigateClick(filterData: FilterData): void {
        this.loadByFilter(filterData);
    }

    getDefaultFilter(): FilterData {
        const filterData = super.getDefaultFilter();
        filterData.order = 'tipomidia.nome '
        return filterData;
    }

    getRowFilter(): FilterData {
        let filter= this.buildRowFilter('trb_tipomidia');
        filter.whereClauses[0].dataType='INTEGER';
        return filter;
    }

    getTableName(): string {
        return 'tipomidia' ;
    }

    getFieldList(): FieldSearch[] {
        let retorno = [];
        retorno[0] = new FieldSearch('nome','nome','STRING');
        return retorno;
    }
    getReportList():ReportGroup[]{
        return [];
    }
}