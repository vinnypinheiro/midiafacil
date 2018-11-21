import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoUsoAlvara} from '../tipousoalvara'; 
import {TipoUsoAlvaraService} from '../tipousoalvara.service'; 

@Component({
 selector: 'gov-tipousoalvara-form', 
 templateUrl: './tipousoalvara-form.component.html', 
 //styleUrls: ['./tipousoalvara-form.component.css'] 
}) 
export class TipoUsoAlvaraFormComponent extends CommonsForm<TipoUsoAlvara> implements OnInit { 

    constructor(apiService: TipoUsoAlvaraService, 
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
         //console.log(this.activeBean.tipousoalvara.id); 
     } 
} 

