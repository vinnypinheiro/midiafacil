import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Formato} from '../formato'; 
import {FormatoService} from '../formato.service'; 
import {MaterialService} from '../../material/material.service'; 

@Component({
 selector: 'gov-formato-form', 
 templateUrl: './formato-form.component.html', 
 //styleUrls: ['./formato-form.component.css'] 
}) 
export class FormatoFormComponent extends CommonsForm<Formato> implements OnInit { 

    constructor(apiService: FormatoService, 
                            private materialService: MaterialService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'material': { 
                 return this.materialService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'material': { 
                 return this.buildLookupFilter('material'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.formato.id); 
     } 
} 

