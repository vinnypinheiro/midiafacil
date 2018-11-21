import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {NaturezaOperacaoEmpresa} from '../naturezaoperacaoempresa'; 
import {NaturezaOperacaoEmpresaService} from '../naturezaoperacaoempresa.service'; 

@Component({
 selector: 'gov-naturezaoperacaoempresa-form', 
 templateUrl: './naturezaoperacaoempresa-form.component.html', 
 //styleUrls: ['./naturezaoperacaoempresa-form.component.css'] 
}) 
export class NaturezaOperacaoEmpresaFormComponent extends CommonsForm<NaturezaOperacaoEmpresa> implements OnInit { 

    constructor(apiService: NaturezaOperacaoEmpresaService, 
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
         //console.log(this.activeBean.naturezaoperacaoempresa.id); 
     } 
} 

