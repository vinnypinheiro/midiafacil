import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoBaixa} from '../tipobaixa'; 
import {TipoBaixaService} from '../tipobaixa.service'; 

@Component({
 selector: 'gov-tipobaixa-form', 
 templateUrl: './tipobaixa-form.component.html', 
 //styleUrls: ['./tipobaixa-form.component.css'] 
}) 
export class TipoBaixaFormComponent extends CommonsForm<TipoBaixa> implements OnInit { 

    constructor(apiService: TipoBaixaService, 
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
         //console.log(this.activeBean.tipobaixa.id); 
     } 
} 

