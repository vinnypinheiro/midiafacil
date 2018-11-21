import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoLogradouro} from '../tipologradouro'; 
import {TipoLogradouroService} from '../tipologradouro.service'; 

@Component({
 selector: 'gov-tipologradouro-form', 
 templateUrl: './tipologradouro-form.component.html', 
 //styleUrls: ['./tipologradouro-form.component.css'] 
}) 
export class TipoLogradouroFormComponent extends CommonsForm<TipoLogradouro> implements OnInit { 

    constructor(apiService: TipoLogradouroService, 
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
         //console.log(this.activeBean.tipologradouro.id); 
     } 
} 

