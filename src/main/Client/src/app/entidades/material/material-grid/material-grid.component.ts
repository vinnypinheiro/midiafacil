import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../../components/interfaces';
import {FieldSearch} from '../../../utils/utils';
import {CommonsGrid} from '../../../commons-grid';
import {ReportGroup} from '../../../shared/report-group';
import {Material} from '../material';
import {MaterialService} from '../material.service';

import {fuseAnimations} from "../../../../@fuse/animations";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
    selector: 'gov-material-grid',
    templateUrl: './material-grid.component.html',
    styleUrls: ['./material-grid-component.scss'] ,
    animations   : fuseAnimations,
})
export class MaterialGridComponent extends CommonsGrid<Material> implements OnInit {


    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','descricao', 'formato'];

    constructor(apiService: MaterialService, router: Router) {
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
        filterData.order = 'material.descricao '
        return filterData;
    }

    getRowFilter(): FilterData {
        let filter= this.buildRowFilter('trb_material');
        filter.whereClauses[0].dataType='INTEGER';
        return filter;
    }

    getTableName(): string {
        return 'material' ;
    }

    getFieldList(): FieldSearch[] {
        let retorno = [];
        retorno[0] = new FieldSearch('descricao','descricao','STRING');
        return retorno;
    }
    getReportList():ReportGroup[]{
        return [];
    }
}