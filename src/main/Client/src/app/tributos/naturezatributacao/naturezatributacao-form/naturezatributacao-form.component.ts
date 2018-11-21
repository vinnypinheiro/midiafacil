import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {NaturezaTributacao} from '../naturezatributacao'; 
import {NaturezaTributacaoService} from '../naturezatributacao.service'; 

@Component({
 selector: 'gov-naturezatributacao-form', 
 templateUrl: './naturezatributacao-form.component.html', 
 //styleUrls: ['./naturezatributacao-form.component.css'] 
}) 
export class NaturezaTributacaoFormComponent extends CommonsForm<NaturezaTributacao> implements OnInit { 

    constructor(apiService: NaturezaTributacaoService, 
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
         //console.log(this.activeBean.naturezatributacao.id); 
     } 
} 

