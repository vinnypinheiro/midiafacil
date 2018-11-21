import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoDeclarante} from '../tipodeclarante'; 
import {TipoDeclaranteService} from '../tipodeclarante.service'; 

@Component({
 selector: 'gov-tipodeclarante-form', 
 templateUrl: './tipodeclarante-form.component.html', 
 //styleUrls: ['./tipodeclarante-form.component.css'] 
}) 
export class TipoDeclaranteFormComponent extends CommonsForm<TipoDeclarante> implements OnInit { 

    constructor(apiService: TipoDeclaranteService, 
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
         //console.log(this.activeBean.tipodeclarante.id); 
     } 
} 

