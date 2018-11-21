import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {TipoVeiculoService} from '../../tipoveiculo/tipoveiculo.service'; 
import {CategoriaVeiculoService} from '../../categoriaveiculo/categoriaveiculo.service'; 

@Component({
 selector: 'gov-veiculo-form', 
 templateUrl: './veiculo-form.component.html', 
 //styleUrls: ['./veiculo-form.component.css'] 
}) 
export class VeiculoFormComponent extends CommonsForm<Veiculo> implements OnInit { 

    constructor(apiService: VeiculoService, 
                            private contribuinteService: ContribuinteService, 
                            private tipoveiculoService: TipoVeiculoService, 
                            private categoriaveiculoService: CategoriaVeiculoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'contribuinte': { 
                 return this.contribuinteService; 
             } 

             case 'tipoveiculo': { 
                 return this.tipoveiculoService; 
             } 

             case 'categoriaveiculo': { 
                 return this.categoriaveiculoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'contribuinte': { 
                 return this.buildLookupFilter('trb_contribuinte'); 
             }

             case 'tipoveiculo': { 
                 return this.buildLookupFilter('trb_tipoveiculo'); 
             }

             case 'categoriaveiculo': { 
                 return this.buildLookupFilter('trb_categoriaveiculo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.veiculo.id); 
     } 
} 

