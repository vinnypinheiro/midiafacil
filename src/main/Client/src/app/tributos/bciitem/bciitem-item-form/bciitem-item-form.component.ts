import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BciItem} from '../bciitem';
import {BciItemService} from '../bciitem.service';
import {CommonsGrid} from "../../../commons-grid";
import {FilterData} from "../../../components/interfaces";

@Component({
  selector: 'gov-bciitem-item-form',
  templateUrl: './bciitem-item-form.component.html',
  //styleUrls: ['./bciitem-grid.component.css'] 
})
export class BciitemItemFormComponent  extends CommonsGrid<BciItem> implements OnInit {

  activeBean: BciItem;

  constructor(public apiService: BciItemService, router: Router) {
    super(apiService,router);
  }

  ngOnInit() {
    this.loadByFilter(this.getDefaultFilter());
  }


  getTableName(): string {
    return 'trb_bciitem';
  }

  getReportList(){
    return [];
  }

  getRowFilter(): FilterData {
    let filter= this.buildRowFilter('trb_bciitem');
    filter.whereClauses[0].dataType='INTEGER';
    return filter;
  }

}
