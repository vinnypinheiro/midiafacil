import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CreditoBancarioStatus} from '../creditobancariostatus'; 
import {CreditoBancarioStatusService} from '../creditobancariostatus.service'; 

@Component({
 selector: 'gov-creditobancariostatus-form', 
 templateUrl: './creditobancariostatus-form.component.html', 
 //styleUrls: ['./creditobancariostatus-form.component.css'] 
}) 
export class CreditoBancarioStatusFormComponent extends CommonsForm<CreditoBancarioStatus> implements OnInit { 

    constructor(apiService: CreditoBancarioStatusService, 
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
         //console.log(this.activeBean.creditobancariostatus.id); 
     } 
} 

