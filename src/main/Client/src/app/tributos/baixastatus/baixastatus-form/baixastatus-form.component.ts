import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {BaixaStatus} from '../baixastatus'; 
import {BaixaStatusService} from '../baixastatus.service'; 

@Component({
 selector: 'gov-baixastatus-form', 
 templateUrl: './baixastatus-form.component.html', 
 //styleUrls: ['./baixastatus-form.component.css'] 
}) 
export class BaixaStatusFormComponent extends CommonsForm<BaixaStatus> implements OnInit { 

    constructor(apiService: BaixaStatusService, 
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
         //console.log(this.activeBean.baixastatus.id); 
     } 
} 

