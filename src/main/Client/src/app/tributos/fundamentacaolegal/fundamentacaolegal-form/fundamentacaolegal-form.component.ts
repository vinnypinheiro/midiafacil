import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {FundamentacaoLegal} from '../fundamentacaolegal'; 
import {FundamentacaoLegalService} from '../fundamentacaolegal.service'; 

@Component({
 selector: 'gov-fundamentacaolegal-form', 
 templateUrl: './fundamentacaolegal-form.component.html', 
 //styleUrls: ['./fundamentacaolegal-form.component.css'] 
}) 
export class FundamentacaoLegalFormComponent extends CommonsForm<FundamentacaoLegal> implements OnInit { 

    constructor(apiService: FundamentacaoLegalService, 
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
         //console.log(this.activeBean.fundamentacaolegal.id); 
     } 
} 

