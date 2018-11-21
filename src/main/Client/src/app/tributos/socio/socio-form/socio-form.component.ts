import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Socio} from '../socio'; 
import {SocioService} from '../socio.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 

@Component({
 selector: 'gov-socio-form', 
 templateUrl: './socio-form.component.html', 
 //styleUrls: ['./socio-form.component.css'] 
}) 
export class SocioFormComponent extends CommonsForm<Socio> implements OnInit { 

    constructor(apiService: SocioService, 
                            private empresaService: EmpresaService, 
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
             case 'empresa': { 
                 return this.empresaService; 
             } 

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
             case 'empresa': { 
                 return this.buildLookupFilter('trb_empresa'); 
             }

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
         //console.log(this.activeBean.socio.id); 
     } 
} 

