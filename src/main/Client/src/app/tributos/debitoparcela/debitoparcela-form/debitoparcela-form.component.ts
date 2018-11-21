import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {DebitoParcela} from '../debitoparcela'; 
import {DebitoParcelaService} from '../debitoparcela.service'; 
import {DebitoService} from '../../debito/debito.service'; 
import {StatusDebitoService} from '../../statusdebito/statusdebito.service';

@Component({
 selector: 'gov-debitoparcela-form', 
 templateUrl: './debitoparcela-form.component.html', 
 //styleUrls: ['./debitoparcela-form.component.css'] 
}) 
export class DebitoParcelaFormComponent extends CommonsForm<DebitoParcela> implements OnInit { 

    constructor(apiService: DebitoParcelaService, 
                            private debitoService: DebitoService, 
                            private statusdebitoService: StatusDebitoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'debito': { 
                 return this.debitoService; 
             } 

             case 'statusdebito': { 
                 return this.statusdebitoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'debito': { 
                 return this.buildLookupFilter('trb_debito'); 
             }

             case 'statusdebito': { 
                 return this.buildLookupFilter('trb_statusdebito'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.debitoparcela.id); 
     }


} 

