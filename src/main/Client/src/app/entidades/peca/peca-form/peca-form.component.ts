import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Peca} from '../peca'; 
import {PecaService} from '../peca.service'; 
import {FormatoService} from '../../formato/formato.service'; 
import {FormatoRevistaService} from '../../formatorevista/formatorevista.service'; 
import {MaterialService} from '../../material/material.service'; 
import {PlanoMidiaService} from '../../planomidia/planomidia.service'; 
import {TipoMidiaService} from '../../tipomidia/tipomidia.service'; 
import {TipoMidiaDigitalService} from '../../tipomidiadigital/tipomidiadigital.service'; 

@Component({
 selector: 'gov-peca-form', 
 templateUrl: './peca-form.component.html', 
 //styleUrls: ['./peca-form.component.css'] 
}) 
export class PecaFormComponent extends CommonsForm<Peca> implements OnInit { 

    constructor(apiService: PecaService, 
                            private formatoService: FormatoService, 
                            private formatorevistaService: FormatoRevistaService, 
                            private materialService: MaterialService, 
                            private planomidiaService: PlanoMidiaService, 
                            private tipomidiaService: TipoMidiaService, 
                            private tipomidiadigitalService: TipoMidiaDigitalService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'formato': { 
                 return this.formatoService; 
             } 

             case 'formatorevista': { 
                 return this.formatorevistaService; 
             } 

             case 'material': { 
                 return this.materialService; 
             } 

             case 'planomidia': { 
                 return this.planomidiaService; 
             } 

             case 'tipomidia': { 
                 return this.tipomidiaService; 
             } 

             case 'tipomidiadigital': { 
                 return this.tipomidiadigitalService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'formato': { 
                 return this.buildLookupFilter('formato'); 
             }

             case 'formatorevista': { 
                 return this.buildLookupFilter('formatorevista'); 
             }

             case 'material': { 
                 return this.buildLookupFilter('material'); 
             }

             case 'planomidia': { 
                 return this.buildLookupFilter('planomidia'); 
             }

             case 'tipomidia': { 
                 return this.buildLookupFilter('tipomidia'); 
             }

             case 'tipomidiadigital': { 
                 return this.buildLookupFilter('tipomidiadigital'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.peca.id); 
     } 
} 

