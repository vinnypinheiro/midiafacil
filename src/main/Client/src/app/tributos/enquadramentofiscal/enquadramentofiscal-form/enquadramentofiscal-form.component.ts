import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {EnquadramentoFiscal} from '../enquadramentofiscal'; 
import {EnquadramentoFiscalService} from '../enquadramentofiscal.service'; 

@Component({
 selector: 'gov-enquadramentofiscal-form', 
 templateUrl: './enquadramentofiscal-form.component.html', 
 //styleUrls: ['./enquadramentofiscal-form.component.css'] 
}) 
export class EnquadramentoFiscalFormComponent extends CommonsForm<EnquadramentoFiscal> implements OnInit { 

    constructor(apiService: EnquadramentoFiscalService, 
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
         //console.log(this.activeBean.enquadramentofiscal.id); 
     } 
} 

