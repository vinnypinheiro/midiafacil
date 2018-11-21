import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {DividaAtivaItem} from '../dividaativaitem'; 
import {DividaAtivaItemService} from '../dividaativaitem.service'; 
import {DividaAtivaService} from '../../dividaativa/dividaativa.service'; 
import {DebitoParcelaService} from '../../debitoparcela/debitoparcela.service'; 

@Component({
 selector: 'gov-dividaativaitem-form', 
 templateUrl: './dividaativaitem-form.component.html', 
 //styleUrls: ['./dividaativaitem-form.component.css'] 
}) 
export class DividaAtivaItemFormComponent extends CommonsForm<DividaAtivaItem> implements OnInit { 

    constructor(apiService: DividaAtivaItemService, 
                            private dividaativaService: DividaAtivaService, 
                            private debitoparcelaService: DebitoParcelaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'dividaativa': { 
                 return this.dividaativaService; 
             } 

             case 'debitoparcela': { 
                 return this.debitoparcelaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'dividaativa': { 
                 return this.buildLookupFilter('trb_dividaativa'); 
             }

             case 'debitoparcela': { 
                 return this.buildLookupFilter('trb_debitoparcela'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.dividaativaitem.id); 
     } 
} 

