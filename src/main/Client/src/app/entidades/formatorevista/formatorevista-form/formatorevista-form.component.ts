import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {FormatoRevista} from '../formatorevista'; 
import {FormatoRevistaService} from '../formatorevista.service'; 

@Component({
 selector: 'gov-formatorevista-form', 
 templateUrl: './formatorevista-form.component.html', 
 //styleUrls: ['./formatorevista-form.component.css'] 
}) 
export class FormatoRevistaFormComponent extends CommonsForm<FormatoRevista> implements OnInit { 

    constructor(apiService: FormatoRevistaService, 
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
         //console.log(this.activeBean.formatorevista.id); 
     } 
} 

