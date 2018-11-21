import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Iptu} from '../iptu'; 
import {IptuService} from '../iptu.service'; 
import {ImovelService} from '../../imovel/imovel.service'; 
import {LogradouroService} from '../../logradouro/logradouro.service'; 
import {SetorService} from '../../setor/setor.service'; 

@Component({
 selector: 'gov-iptu-form', 
 templateUrl: './iptu-form.component.html', 
 //styleUrls: ['./iptu-form.component.css'] 
}) 
export class IptuFormComponent extends CommonsForm<Iptu> implements OnInit { 

    constructor(apiService: IptuService, 
                            private imovelService: ImovelService, 
                            private logradouroService: LogradouroService, 
                            private setorService: SetorService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'imovel': { 
                 return this.imovelService; 
             } 

             case 'logradouro': { 
                 return this.logradouroService; 
             } 

             case 'setor': { 
                 return this.setorService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'imovel': { 
                 return this.buildLookupFilter('trb_imovel'); 
             }

             case 'logradouro': { 
                 return this.buildLookupFilter('trb_logradouro'); 
             }

             case 'setor': { 
                 return this.buildLookupFilter('trb_setor'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.iptu.id); 
     } 
} 

