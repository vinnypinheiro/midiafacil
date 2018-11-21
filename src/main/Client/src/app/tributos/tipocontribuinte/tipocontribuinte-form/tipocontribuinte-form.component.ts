import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoContribuinte} from '../tipocontribuinte'; 
import {TipoContribuinteService} from '../tipocontribuinte.service'; 

@Component({
 selector: 'gov-tipocontribuinte-form', 
 templateUrl: './tipocontribuinte-form.component.html', 
 //styleUrls: ['./tipocontribuinte-form.component.css'] 
}) 
export class TipoContribuinteFormComponent extends CommonsForm<TipoContribuinte> implements OnInit { 

    constructor(apiService: TipoContribuinteService, 
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
         //console.log(this.activeBean.tipocontribuinte.id); 
     } 
} 

