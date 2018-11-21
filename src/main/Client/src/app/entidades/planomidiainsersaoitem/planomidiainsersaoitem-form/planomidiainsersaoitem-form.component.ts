import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PlanoMidiaInsersaoItem} from '../planomidiainsersaoitem'; 
import {PlanoMidiaInsersaoItemService} from '../planomidiainsersaoitem.service'; 

@Component({
 selector: 'gov-planomidiainsersaoitem-form', 
 templateUrl: './planomidiainsersaoitem-form.component.html', 
 //styleUrls: ['./planomidiainsersaoitem-form.component.css'] 
}) 
export class PlanoMidiaInsersaoItemFormComponent extends CommonsForm<PlanoMidiaInsersaoItem> implements OnInit { 

    constructor(apiService: PlanoMidiaInsersaoItemService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.planomidiainsersaoitem.id); 
     } 
} 

