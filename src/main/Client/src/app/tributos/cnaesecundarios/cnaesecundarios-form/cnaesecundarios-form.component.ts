import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeSecundarios} from '../cnaesecundarios'; 
import {CnaeSecundariosService} from '../cnaesecundarios.service'; 
import {CnaeService} from '../../cnae/cnae.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 

@Component({
 selector: 'gov-cnaesecundarios-form', 
 templateUrl: './cnaesecundarios-form.component.html', 
 //styleUrls: ['./cnaesecundarios-form.component.css'] 
}) 
export class CnaeSecundariosFormComponent extends CommonsForm<CnaeSecundarios> implements OnInit { 

    constructor(apiService: CnaeSecundariosService, 
                            private cnaeService: CnaeService, 
                            private empresaService: EmpresaService, 
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

             case 'empresa': { 
                 return this.empresaService; 
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

             case 'empresa': { 
                 return this.buildLookupFilter('trb_empresa'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaesecundarios.id); 
     } 
} 

