import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeGrupo} from '../cnaegrupo'; 
import {CnaeGrupoService} from '../cnaegrupo.service'; 
import {CnaeDivisaoService} from '../../cnaedivisao/cnaedivisao.service'; 

@Component({
 selector: 'gov-cnaegrupo-form', 
 templateUrl: './cnaegrupo-form.component.html', 
 //styleUrls: ['./cnaegrupo-form.component.css'] 
}) 
export class CnaeGrupoFormComponent extends CommonsForm<CnaeGrupo> implements OnInit { 

    constructor(apiService: CnaeGrupoService, 
                            private cnaedivisaoService: CnaeDivisaoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnaedivisao': { 
                 return this.cnaedivisaoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnaedivisao': { 
                 return this.buildLookupFilter('trb_cnaedivisao'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaegrupo.id); 
     } 
} 

