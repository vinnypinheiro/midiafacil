import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service'; 
import {UfService} from '../../uf/uf.service'; 
import {TipoMidiaService} from '../../tipomidia/tipomidia.service'; 

@Component({
 selector: 'gov-veiculo-form', 
 templateUrl: './veiculo-form.component.html', 
 //styleUrls: ['./veiculo-form.component.css'] 
}) 
export class VeiculoFormComponent extends CommonsForm<Veiculo> implements OnInit { 

    constructor(apiService: VeiculoService, 
                            private ufService: UfService, 
                            private tipomidiaService: TipoMidiaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'uf': { 
                 return this.ufService; 
             } 

             case 'tipomidia': { 
                 return this.tipomidiaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'uf': { 
                 return this.buildLookupFilter('uf'); 
             }

             case 'tipomidia': { 
                 return this.buildLookupFilter('tipomidia'); 
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

