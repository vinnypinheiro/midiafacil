import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {DeclaracaoFiscal} from '../declaracaofiscal'; 
import {DeclaracaoFiscalService} from '../declaracaofiscal.service'; 

@Component({
 selector: 'gov-declaracaofiscal-form', 
 templateUrl: './declaracaofiscal-form.component.html', 
 //styleUrls: ['./declaracaofiscal-form.component.css'] 
}) 
export class DeclaracaoFiscalFormComponent extends CommonsForm<DeclaracaoFiscal> implements OnInit { 

    constructor(apiService: DeclaracaoFiscalService, 
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
         //console.log(this.activeBean.declaracaofiscal.id); 
     } 
} 

