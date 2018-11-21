import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoConta} from '../tipoconta'; 
import {TipoContaService} from '../tipoconta.service'; 

@Component({
 selector: 'gov-tipoconta-form', 
 templateUrl: './tipoconta-form.component.html', 
 //styleUrls: ['./tipoconta-form.component.css'] 
}) 
export class TipoContaFormComponent extends CommonsForm<TipoConta> implements OnInit { 

    constructor(apiService: TipoContaService, 
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
         //console.log(this.activeBean.tipoconta.id); 
     } 
} 

