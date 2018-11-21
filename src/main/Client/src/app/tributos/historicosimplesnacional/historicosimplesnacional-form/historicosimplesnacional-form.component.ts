import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {HistoricoSimplesNacional} from '../historicosimplesnacional'; 
import {HistoricoSimplesNacionalService} from '../historicosimplesnacional.service'; 
import {SimplesNacionalService} from '../../simplesnacional/simplesnacional.service'; 

@Component({
 selector: 'gov-historicosimplesnacional-form', 
 templateUrl: './historicosimplesnacional-form.component.html', 
 //styleUrls: ['./historicosimplesnacional-form.component.css'] 
}) 
export class HistoricoSimplesNacionalFormComponent extends CommonsForm<HistoricoSimplesNacional> implements OnInit { 

    constructor(apiService: HistoricoSimplesNacionalService, 
                            private simplesnacionalService: SimplesNacionalService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'simplesnacional': { 
                 return this.simplesnacionalService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'simplesnacional': { 
                 return this.buildLookupFilter('trb_simplesnacional'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.historicosimplesnacional.id); 
     } 
} 

