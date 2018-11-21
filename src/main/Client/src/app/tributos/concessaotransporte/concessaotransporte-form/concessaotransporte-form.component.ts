import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ConcessaoTransporte} from '../concessaotransporte'; 
import {ConcessaoTransporteService} from '../concessaotransporte.service'; 
import {VeiculoService} from '../../veiculo/veiculo.service'; 

@Component({
 selector: 'gov-concessaotransporte-form', 
 templateUrl: './concessaotransporte-form.component.html', 
 //styleUrls: ['./concessaotransporte-form.component.css'] 
}) 
export class ConcessaoTransporteFormComponent extends CommonsForm<ConcessaoTransporte> implements OnInit { 

    constructor(apiService: ConcessaoTransporteService, 
                            private veiculoService: VeiculoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
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
                 return this.buildLookupFilter('trb_veiculo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.concessaotransporte.id); 
     } 
} 

