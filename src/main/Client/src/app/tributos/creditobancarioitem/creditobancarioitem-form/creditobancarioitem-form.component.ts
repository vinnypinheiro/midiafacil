import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CreditoBancarioItem} from '../creditobancarioitem'; 
import {CreditoBancarioItemService} from '../creditobancarioitem.service'; 
import {CreditoBancarioService} from '../../creditobancario/creditobancario.service'; 
import {CobrancaBancariaStatusService} from '../../cobrancabancariastatus/cobrancabancariastatus.service'; 

@Component({
 selector: 'gov-creditobancarioitem-form', 
 templateUrl: './creditobancarioitem-form.component.html', 
 //styleUrls: ['./creditobancarioitem-form.component.css'] 
}) 
export class CreditoBancarioItemFormComponent extends CommonsForm<CreditoBancarioItem> implements OnInit { 

    constructor(apiService: CreditoBancarioItemService, 
                            private creditobancarioService: CreditoBancarioService, 
                            private cobrancabancariastatusService: CobrancaBancariaStatusService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'creditobancario': { 
                 return this.creditobancarioService; 
             } 

             case 'cobrancabancariastatus': { 
                 return this.cobrancabancariastatusService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'creditobancario': { 
                 return this.buildLookupFilter('trb_creditobancario'); 
             }

             case 'cobrancabancariastatus': { 
                 return this.buildLookupFilter('trb_cobrancabancariastatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.creditobancarioitem.id); 
     } 
} 

