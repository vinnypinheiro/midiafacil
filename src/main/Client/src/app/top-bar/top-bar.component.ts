import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'gov-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public sharedService: SharedService) {

  }

  ngOnInit() {

  }

}
