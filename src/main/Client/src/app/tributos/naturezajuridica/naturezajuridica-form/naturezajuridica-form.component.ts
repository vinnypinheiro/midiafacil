import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {NaturezaJuridica} from '../naturezajuridica'; 
import {NaturezaJuridicaService} from '../naturezajuridica.service'; 

@Component({
 selector: 'gov-naturezajuridica-form', 
 templateUrl: './naturezajuridica-form.component.html', 
 //styleUrls: ['./naturezajuridica-form.component.css'] 
}) 
export class NaturezaJuridicaFormComponent extends CommonsForm<NaturezaJuridica> implements OnInit { 

    constructor(apiService: NaturezaJuridicaService, 
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
         //console.log(this.activeBean.naturezajuridica.id); 
     } 
} 

