import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {StatusSimplesNacional} from '../statussimplesnacional'; 
import {StatusSimplesNacionalService} from '../statussimplesnacional.service'; 

@Component({
 selector: 'gov-statussimplesnacional-form', 
 templateUrl: './statussimplesnacional-form.component.html', 
 //styleUrls: ['./statussimplesnacional-form.component.css'] 
}) 
export class StatusSimplesNacionalFormComponent extends CommonsForm<StatusSimplesNacional> implements OnInit { 

    constructor(apiService: StatusSimplesNacionalService, 
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
         //console.log(this.activeBean.statussimplesnacional.id); 
     } 
} 

