import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ModuloServicoTomadoDebito} from '../moduloservicotomadodebito'; 
import {ModuloServicoTomadoDebitoService} from '../moduloservicotomadodebito.service'; 
import {ModuloServicoTomadoService} from '../../moduloservicotomado/moduloservicotomado.service'; 
import {DebitoService} from '../../debito/debito.service'; 

@Component({
 selector: 'gov-moduloservicotomadodebito-form', 
 templateUrl: './moduloservicotomadodebito-form.component.html', 
 //styleUrls: ['./moduloservicotomadodebito-form.component.css'] 
}) 
export class ModuloServicoTomadoDebitoFormComponent extends CommonsForm<ModuloServicoTomadoDebito> implements OnInit { 

    constructor(apiService: ModuloServicoTomadoDebitoService, 
                            private moduloservicotomadoService: ModuloServicoTomadoService, 
                            private debitoService: DebitoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'moduloservicotomado': { 
                 return this.moduloservicotomadoService; 
             } 

             case 'debito': { 
                 return this.debitoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'moduloservicotomado': { 
                 return this.buildLookupFilter('trb_moduloservicotomado'); 
             }

             case 'debito': { 
                 return this.buildLookupFilter('trb_debito'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.moduloservicotomadodebito.id); 
     } 
} 

