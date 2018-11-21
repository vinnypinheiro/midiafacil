import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {RecursoSistema} from '../recursosistema'; 
import {RecursoSistemaService} from '../recursosistema.service'; 

@Component({
 selector: 'gov-recursosistema-form', 
 templateUrl: './recursosistema-form.component.html', 
 //styleUrls: ['./recursosistema-form.component.css'] 
}) 
export class RecursoSistemaFormComponent extends CommonsForm<RecursoSistema> implements OnInit { 

    constructor(apiService: RecursoSistemaService, 
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
         //console.log(this.activeBean.recursosistema.id); 
     } 
} 

