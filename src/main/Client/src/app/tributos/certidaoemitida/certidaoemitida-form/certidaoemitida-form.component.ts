import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CertidaoEmitida} from '../certidaoemitida'; 
import {CertidaoEmitidaService} from '../certidaoemitida.service'; 
import {TipoCertidaoService} from '../../tipocertidao/tipocertidao.service'; 

@Component({
 selector: 'gov-certidaoemitida-form', 
 templateUrl: './certidaoemitida-form.component.html', 
 //styleUrls: ['./certidaoemitida-form.component.css'] 
}) 
export class CertidaoEmitidaFormComponent extends CommonsForm<CertidaoEmitida> implements OnInit { 

    constructor(apiService: CertidaoEmitidaService, 
                            private tipocertidaoService: TipoCertidaoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipocertidao': { 
                 return this.tipocertidaoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipocertidao': { 
                 return this.buildLookupFilter('trb_tipocertidao'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.certidaoemitida.id); 
     } 
} 

