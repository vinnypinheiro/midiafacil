import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoBancoContrato} from '../tipobancocontrato'; 
import {TipoBancoContratoService} from '../tipobancocontrato.service'; 

@Component({
 selector: 'gov-tipobancocontrato-form', 
 templateUrl: './tipobancocontrato-form.component.html', 
 //styleUrls: ['./tipobancocontrato-form.component.css'] 
}) 
export class TipoBancoContratoFormComponent extends CommonsForm<TipoBancoContrato> implements OnInit { 

    constructor(apiService: TipoBancoContratoService, 
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
         //console.log(this.activeBean.tipobancocontrato.id); 
     } 
} 

