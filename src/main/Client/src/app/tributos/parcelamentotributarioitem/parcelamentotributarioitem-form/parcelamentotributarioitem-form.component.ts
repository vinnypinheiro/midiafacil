import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ParcelamentoTributarioItem} from '../parcelamentotributarioitem'; 
import {ParcelamentoTributarioItemService} from '../parcelamentotributarioitem.service'; 
import {DebitoParcelaService} from '../../debitoparcela/debitoparcela.service'; 
import {ParcelamentoTributarioService} from '../../parcelamentotributario/parcelamentotributario.service'; 

@Component({
 selector: 'gov-parcelamentotributarioitem-form', 
 templateUrl: './parcelamentotributarioitem-form.component.html', 
 //styleUrls: ['./parcelamentotributarioitem-form.component.css'] 
}) 
export class ParcelamentoTributarioItemFormComponent extends CommonsForm<ParcelamentoTributarioItem> implements OnInit { 

    constructor(apiService: ParcelamentoTributarioItemService, 
                            private debitoparcelaService: DebitoParcelaService, 
                            private parcelamentotributarioService: ParcelamentoTributarioService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'debitoparcela': { 
                 return this.debitoparcelaService; 
             } 

             case 'parcelamentotributario': { 
                 return this.parcelamentotributarioService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'debitoparcela': { 
                 return this.buildLookupFilter('trb_debitoparcela'); 
             }

             case 'parcelamentotributario': { 
                 return this.buildLookupFilter('trb_parcelamentotributario'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.parcelamentotributarioitem.id); 
     } 
} 

