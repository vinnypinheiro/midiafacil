import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {StatusDebito} from '../statusdebito'; 
import {StatusDebitoService} from '../statusdebito.service'; 

@Component({
 selector: 'gov-statusdebito-form', 
 templateUrl: './statusdebito-form.component.html', 
 //styleUrls: ['./statusdebito-form.component.css'] 
}) 
export class StatusDebitoFormComponent extends CommonsForm<StatusDebito> implements OnInit { 

    constructor(apiService: StatusDebitoService, 
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
         //console.log(this.activeBean.statusdebito.id); 
     } 
} 

