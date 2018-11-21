import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoAlvara} from '../tipoalvara'; 
import {TipoAlvaraService} from '../tipoalvara.service'; 

@Component({
 selector: 'gov-tipoalvara-form', 
 templateUrl: './tipoalvara-form.component.html', 
 //styleUrls: ['./tipoalvara-form.component.css'] 
}) 
export class TipoAlvaraFormComponent extends CommonsForm<TipoAlvara> implements OnInit { 

    constructor(apiService: TipoAlvaraService, 
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
         //console.log(this.activeBean.tipoalvara.id); 
     } 
} 

