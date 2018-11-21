import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {StatusDeclaracaoEletronica} from '../statusdeclaracaoeletronica'; 
import {StatusDeclaracaoEletronicaService} from '../statusdeclaracaoeletronica.service'; 

@Component({
 selector: 'gov-statusdeclaracaoeletronica-form', 
 templateUrl: './statusdeclaracaoeletronica-form.component.html', 
 //styleUrls: ['./statusdeclaracaoeletronica-form.component.css'] 
}) 
export class StatusDeclaracaoEletronicaFormComponent extends CommonsForm<StatusDeclaracaoEletronica> implements OnInit { 

    constructor(apiService: StatusDeclaracaoEletronicaService, 
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
         //console.log(this.activeBean.statusdeclaracaoeletronica.id); 
     } 
} 

