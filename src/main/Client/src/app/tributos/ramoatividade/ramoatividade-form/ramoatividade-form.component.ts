import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {RamoAtividade} from '../ramoatividade'; 
import {RamoAtividadeService} from '../ramoatividade.service'; 

@Component({
 selector: 'gov-ramoatividade-form', 
 templateUrl: './ramoatividade-form.component.html', 
 //styleUrls: ['./ramoatividade-form.component.css'] 
}) 
export class RamoAtividadeFormComponent extends CommonsForm<RamoAtividade> implements OnInit { 

    constructor(apiService: RamoAtividadeService, 
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
         //console.log(this.activeBean.ramoatividade.id); 
     } 
} 

