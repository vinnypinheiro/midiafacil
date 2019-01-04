import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PlanoMidiaInsersao} from '../planomidiainsersao'; 
import {PlanoMidiaInsersaoService} from '../planomidiainsersao.service'; 

@Component({
 selector: 'gov-planomidiainsersao-form', 
 templateUrl: './planomidiainsersao-form.component.html', 
 //styleUrls: ['./planomidiainsersao-form.component.css'] 
}) 
export class PlanoMidiaInsersaoFormComponent extends CommonsForm<PlanoMidiaInsersao> implements OnInit { 

    constructor(apiService: PlanoMidiaInsersaoService, 
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
         //console.log(this.activeBean.planomidiainsersao.id); 
     } 
} 

