import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeLicenca} from '../cnaelicenca'; 
import {CnaeLicencaService} from '../cnaelicenca.service'; 
import {CnaeService} from '../../cnae/cnae.service'; 

@Component({
 selector: 'gov-cnaelicenca-form', 
 templateUrl: './cnaelicenca-form.component.html', 
 //styleUrls: ['./cnaelicenca-form.component.css'] 
}) 
export class CnaeLicencaFormComponent extends CommonsForm<CnaeLicenca> implements OnInit { 

    constructor(apiService: CnaeLicencaService, 
                            private cnaeService: CnaeService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnae': { 
                 return this.cnaeService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnae': { 
                 return this.buildLookupFilter('trb_cnae'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaelicenca.id); 
     } 
} 

