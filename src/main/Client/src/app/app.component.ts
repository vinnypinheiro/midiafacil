import {Component} from '@angular/core';
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'gov-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public sharedService:SharedService){

  }
  title = 'gov';
}
