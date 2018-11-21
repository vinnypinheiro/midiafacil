import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {OperadorRecurso} from '../operadorrecurso'; 
import {OperadorRecursoService} from '../operadorrecurso.service'; 
import {OperadorService} from '../../operador/operador.service'; 
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service'; 
import {RecursoSistemaService} from '../../recursosistema/recursosistema.service'; 

@Component({
 selector: 'gov-operadorrecurso-form', 
 templateUrl: './operadorrecurso-form.component.html', 
 //styleUrls: ['./operadorrecurso-form.component.css'] 
}) 
export class OperadorRecursoFormComponent extends CommonsForm<OperadorRecurso> implements OnInit { 

    constructor(apiService: OperadorRecursoService, 
                            private operadorService: OperadorService, 
                            private unidadegestoraService: UnidadeGestoraService, 
                            private recursosistemaService: RecursoSistemaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'operador': { 
                 return this.operadorService; 
             } 

             case 'unidadegestora': { 
                 return this.unidadegestoraService; 
             } 

             case 'recursosistema': { 
                 return this.recursosistemaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'operador': { 
                 return this.buildLookupFilter('trb_operador'); 
             }

             case 'unidadegestora': { 
                 return this.buildLookupFilter('trb_unidadegestora'); 
             }

             case 'recursosistema': { 
                 return this.buildLookupFilter('trb_recursosistema'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.operadorrecurso.id); 
     } 
} 

