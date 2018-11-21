import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ResponsavelLegal} from '../responsavellegal'; 
import {ResponsavelLegalService} from '../responsavellegal.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 

@Component({
 selector: 'gov-responsavellegal-form', 
 templateUrl: './responsavellegal-form.component.html', 
 //styleUrls: ['./responsavellegal-form.component.css'] 
}) 
export class ResponsavelLegalFormComponent extends CommonsForm<ResponsavelLegal> implements OnInit { 

    constructor(apiService: ResponsavelLegalService, 
                            private contribuinteService: ContribuinteService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'contribuinte': { 
                 return this.contribuinteService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'contribuinte': { 
                 return this.buildLookupFilter('trb_contribuinte'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.responsavellegal.id); 
     } 
} 

