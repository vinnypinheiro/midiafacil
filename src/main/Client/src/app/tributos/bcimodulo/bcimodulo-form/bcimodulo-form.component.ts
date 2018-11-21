import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {BciModulo} from '../bcimodulo'; 
import {BciModuloService} from '../bcimodulo.service'; 

@Component({
 selector: 'gov-bcimodulo-form', 
 templateUrl: './bcimodulo-form.component.html', 
 //styleUrls: ['./bcimodulo-form.component.css'] 
}) 
export class BciModuloFormComponent extends CommonsForm<BciModulo> implements OnInit { 

    constructor(apiService: BciModuloService, 
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
         //console.log(this.activeBean.bcimodulo.id); 
     } 
} 

