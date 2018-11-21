import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoConstituicaoEmpresa} from '../tipoconstituicaoempresa'; 
import {TipoConstituicaoEmpresaService} from '../tipoconstituicaoempresa.service'; 

@Component({
 selector: 'gov-tipoconstituicaoempresa-form', 
 templateUrl: './tipoconstituicaoempresa-form.component.html', 
 //styleUrls: ['./tipoconstituicaoempresa-form.component.css'] 
}) 
export class TipoConstituicaoEmpresaFormComponent extends CommonsForm<TipoConstituicaoEmpresa> implements OnInit { 

    constructor(apiService: TipoConstituicaoEmpresaService, 
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
         //console.log(this.activeBean.tipoconstituicaoempresa.id); 
     } 
} 

