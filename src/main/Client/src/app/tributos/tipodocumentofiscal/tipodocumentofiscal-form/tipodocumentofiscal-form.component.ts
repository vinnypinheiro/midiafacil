import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoDocumentoFiscal} from '../tipodocumentofiscal'; 
import {TipoDocumentoFiscalService} from '../tipodocumentofiscal.service'; 

@Component({
 selector: 'gov-tipodocumentofiscal-form', 
 templateUrl: './tipodocumentofiscal-form.component.html', 
 //styleUrls: ['./tipodocumentofiscal-form.component.css'] 
}) 
export class TipoDocumentoFiscalFormComponent extends CommonsForm<TipoDocumentoFiscal> implements OnInit { 

    constructor(apiService: TipoDocumentoFiscalService, 
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
         //console.log(this.activeBean.tipodocumentofiscal.id); 
     } 
} 

