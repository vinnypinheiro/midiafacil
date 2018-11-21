import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Su} from '../su'; 
import {SuService} from '../su.service'; 
import {LogradouroService} from '../../logradouro/logradouro.service'; 
import {ImovelService} from '../../imovel/imovel.service'; 
import {SetorService} from '../../setor/setor.service'; 

@Component({
 selector: 'gov-su-form', 
 templateUrl: './su-form.component.html', 
 //styleUrls: ['./su-form.component.css'] 
}) 
export class SuFormComponent extends CommonsForm<Su> implements OnInit { 

    constructor(apiService: SuService, 
                            private logradouroService: LogradouroService, 
                            private imovelService: ImovelService, 
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
             case 'logradouro': { 
                 return this.logradouroService; 
             } 

             case 'imovel': { 
                 return this.imovelService; 
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
             case 'logradouro': { 
                 return this.buildLookupFilter('trb_logradouro'); 
             }

             case 'imovel': { 
                 return this.buildLookupFilter('trb_imovel'); 
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
         //console.log(this.activeBean.su.id); 
     } 
} 

