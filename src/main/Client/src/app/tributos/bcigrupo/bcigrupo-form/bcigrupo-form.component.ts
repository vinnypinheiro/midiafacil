import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {BciGrupo} from '../bcigrupo'; 
import {BciGrupoService} from '../bcigrupo.service'; 
import {BciModuloService} from '../../bcimodulo/bcimodulo.service'; 

@Component({
 selector: 'gov-bcigrupo-form', 
 templateUrl: './bcigrupo-form.component.html', 
 //styleUrls: ['./bcigrupo-form.component.css'] 
}) 
export class BciGrupoFormComponent extends CommonsForm<BciGrupo> implements OnInit { 

    constructor(apiService: BciGrupoService, 
                            private bcimoduloService: BciModuloService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'bcimodulo': { 
                 return this.bcimoduloService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'bcimodulo': { 
                 return this.buildLookupFilter('trb_bcimodulo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.bcigrupo.id); 
     } 
} 

