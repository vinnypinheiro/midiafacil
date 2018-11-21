import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoCertidao} from '../tipocertidao'; 
import {TipoCertidaoService} from '../tipocertidao.service'; 

@Component({
 selector: 'gov-tipocertidao-form', 
 templateUrl: './tipocertidao-form.component.html', 
 //styleUrls: ['./tipocertidao-form.component.css'] 
}) 
export class TipoCertidaoFormComponent extends CommonsForm<TipoCertidao> implements OnInit { 

    constructor(apiService: TipoCertidaoService, 
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
         //console.log(this.activeBean.tipocertidao.id); 
     } 
} 

