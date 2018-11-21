import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ParcelamentoTributarioDebito} from '../parcelamentotributariodebito'; 
import {ParcelamentoTributarioDebitoService} from '../parcelamentotributariodebito.service'; 
import {ParcelamentoTributarioService} from '../../parcelamentotributario/parcelamentotributario.service'; 
import {DebitoService} from '../../debito/debito.service'; 

@Component({
 selector: 'gov-parcelamentotributariodebito-form', 
 templateUrl: './parcelamentotributariodebito-form.component.html', 
 //styleUrls: ['./parcelamentotributariodebito-form.component.css'] 
}) 
export class ParcelamentoTributarioDebitoFormComponent extends CommonsForm<ParcelamentoTributarioDebito> implements OnInit { 

    constructor(apiService: ParcelamentoTributarioDebitoService, 
                            private parcelamentotributarioService: ParcelamentoTributarioService, 
                            private debitoService: DebitoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'parcelamentotributario': { 
                 return this.parcelamentotributarioService; 
             } 

             case 'debito': { 
                 return this.debitoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'parcelamentotributario': { 
                 return this.buildLookupFilter('trb_parcelamentotributario'); 
             }

             case 'debito': { 
                 return this.buildLookupFilter('trb_debito'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.parcelamentotributariodebito.id); 
     } 
} 

