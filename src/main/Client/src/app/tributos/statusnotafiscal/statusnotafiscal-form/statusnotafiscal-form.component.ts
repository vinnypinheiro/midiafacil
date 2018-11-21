import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {StatusNotaFiscal} from '../statusnotafiscal'; 
import {StatusNotaFiscalService} from '../statusnotafiscal.service'; 

@Component({
 selector: 'gov-statusnotafiscal-form', 
 templateUrl: './statusnotafiscal-form.component.html', 
 //styleUrls: ['./statusnotafiscal-form.component.css'] 
}) 
export class StatusNotaFiscalFormComponent extends CommonsForm<StatusNotaFiscal> implements OnInit { 

    constructor(apiService: StatusNotaFiscalService, 
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
         //console.log(this.activeBean.statusnotafiscal.id); 
     } 
} 

