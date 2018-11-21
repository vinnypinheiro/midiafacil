import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoParcelamentoTributario} from '../tipoparcelamentotributario'; 
import {TipoParcelamentoTributarioService} from '../tipoparcelamentotributario.service'; 

@Component({
 selector: 'gov-tipoparcelamentotributario-form', 
 templateUrl: './tipoparcelamentotributario-form.component.html', 
 //styleUrls: ['./tipoparcelamentotributario-form.component.css'] 
}) 
export class TipoParcelamentoTributarioFormComponent extends CommonsForm<TipoParcelamentoTributario> implements OnInit { 

    constructor(apiService: TipoParcelamentoTributarioService, 
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
         //console.log(this.activeBean.tipoparcelamentotributario.id); 
     } 
} 

