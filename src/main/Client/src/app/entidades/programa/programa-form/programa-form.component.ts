import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Programa} from '../programa'; 
import {ProgramaService} from '../programa.service'; 
import {VeiculoService} from '../../veiculo/veiculo.service'; 
import { Veiculo } from '../../veiculo/veiculo';

@Component({
 selector: 'gov-programa-form', 
 templateUrl: './programa-form.component.html', 
 //styleUrls: ['./programa-form.component.css'] 
}) 
export class ProgramaFormComponent extends CommonsForm<Programa> implements OnInit { 

    veiculo: Veiculo[] = [];

    constructor(apiService: ProgramaService, 
                            private veiculoService: VeiculoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 

         this.veiculoService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
            this.veiculo = response.content;
      
          });


     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'veiculo': { 
                 return this.veiculoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'veiculo': { 
                 return this.buildLookupFilter('veiculo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.programa.id); 
     } 
} 

