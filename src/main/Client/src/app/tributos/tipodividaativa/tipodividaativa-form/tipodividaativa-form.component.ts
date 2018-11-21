import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoDividaAtiva} from '../tipodividaativa'; 
import {TipoDividaAtivaService} from '../tipodividaativa.service'; 

@Component({
 selector: 'gov-tipodividaativa-form', 
 templateUrl: './tipodividaativa-form.component.html', 
 //styleUrls: ['./tipodividaativa-form.component.css'] 
}) 
export class TipoDividaAtivaFormComponent extends CommonsForm<TipoDividaAtiva> implements OnInit { 

    constructor(apiService: TipoDividaAtivaService, 
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
         //console.log(this.activeBean.tipodividaativa.id); 
     } 
} 

