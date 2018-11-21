import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoVeiculo} from '../tipoveiculo'; 
import {TipoVeiculoService} from '../tipoveiculo.service'; 

@Component({
 selector: 'gov-tipoveiculo-form', 
 templateUrl: './tipoveiculo-form.component.html', 
 //styleUrls: ['./tipoveiculo-form.component.css'] 
}) 
export class TipoVeiculoFormComponent extends CommonsForm<TipoVeiculo> implements OnInit { 

    constructor(apiService: TipoVeiculoService, 
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
         //console.log(this.activeBean.tipoveiculo.id); 
     } 
} 

