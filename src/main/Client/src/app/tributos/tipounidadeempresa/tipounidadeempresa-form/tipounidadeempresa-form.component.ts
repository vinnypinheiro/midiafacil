import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoUnidadeEmpresa} from '../tipounidadeempresa'; 
import {TipoUnidadeEmpresaService} from '../tipounidadeempresa.service'; 

@Component({
 selector: 'gov-tipounidadeempresa-form', 
 templateUrl: './tipounidadeempresa-form.component.html', 
 //styleUrls: ['./tipounidadeempresa-form.component.css'] 
}) 
export class TipoUnidadeEmpresaFormComponent extends CommonsForm<TipoUnidadeEmpresa> implements OnInit { 

    constructor(apiService: TipoUnidadeEmpresaService, 
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
         //console.log(this.activeBean.tipounidadeempresa.id); 
     } 
} 

