import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {AlvaraVigilanciaSanitaria} from '../alvaravigilanciasanitaria'; 
import {AlvaraVigilanciaSanitariaService} from '../alvaravigilanciasanitaria.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {ResponsavelLegalService} from '../../responsavellegal/responsavellegal.service'; 
import {AlvaraMotivoStatusService} from '../../alvaramotivostatus/alvaramotivostatus.service'; 

@Component({
 selector: 'gov-alvaravigilanciasanitaria-form', 
 templateUrl: './alvaravigilanciasanitaria-form.component.html', 
 //styleUrls: ['./alvaravigilanciasanitaria-form.component.css'] 
}) 
export class AlvaraVigilanciaSanitariaFormComponent extends CommonsForm<AlvaraVigilanciaSanitaria> implements OnInit { 

    constructor(apiService: AlvaraVigilanciaSanitariaService, 
                            private contribuinteService: ContribuinteService, 
                            private responsavellegalService: ResponsavelLegalService, 
                            private alvaramotivostatusService: AlvaraMotivoStatusService, 
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

             case 'responsavellegal': { 
                 return this.responsavellegalService; 
             } 

             case 'alvaramotivostatus': { 
                 return this.alvaramotivostatusService; 
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

             case 'responsavellegal': { 
                 return this.buildLookupFilter('trb_responsavellegal'); 
             }

             case 'alvaramotivostatus': { 
                 return this.buildLookupFilter('trb_alvaramotivostatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.alvaravigilanciasanitaria.id); 
     } 
} 

