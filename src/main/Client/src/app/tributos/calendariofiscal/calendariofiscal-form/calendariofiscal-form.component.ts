import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CalendarioFiscal} from '../calendariofiscal'; 
import {CalendarioFiscalService} from '../calendariofiscal.service'; 
import {TributoService} from '../../tributo/tributo.service'; 

@Component({
 selector: 'gov-calendariofiscal-form', 
 templateUrl: './calendariofiscal-form.component.html', 
 //styleUrls: ['./calendariofiscal-form.component.css'] 
}) 
export class CalendarioFiscalFormComponent extends CommonsForm<CalendarioFiscal> implements OnInit { 

    constructor(apiService: CalendarioFiscalService, 
                            private tributoService: TributoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tributo': { 
                 return this.tributoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tributo': { 
                 return this.buildLookupFilter('trb_tributo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.calendariofiscal.id); 
     } 
} 

