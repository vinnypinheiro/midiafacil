import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {SimplesNacional} from '../simplesnacional'; 
import {SimplesNacionalService} from '../simplesnacional.service'; 

@Component({
 selector: 'gov-simplesnacional-form', 
 templateUrl: './simplesnacional-form.component.html', 
 //styleUrls: ['./simplesnacional-form.component.css'] 
}) 
export class SimplesNacionalFormComponent extends CommonsForm<SimplesNacional> implements OnInit { 

    constructor(apiService: SimplesNacionalService, 
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
         //console.log(this.activeBean.simplesnacional.id); 
     } 
} 

