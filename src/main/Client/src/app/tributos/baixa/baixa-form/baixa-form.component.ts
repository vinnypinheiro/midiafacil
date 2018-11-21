import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Baixa} from '../baixa'; 
import {BaixaService} from '../baixa.service'; 
import {TipoBaixaService} from '../../tipobaixa/tipobaixa.service'; 
import {BaixaStatusService} from '../../baixastatus/baixastatus.service'; 
import {ContaBancariaService} from '../../contabancaria/contabancaria.service'; 
import {ReceitaService} from '../../receita/receita.service'; 
import {DebitoParcelaService} from '../../debitoparcela/debitoparcela.service'; 
import {CreditoBancarioItemService} from '../../creditobancarioitem/creditobancarioitem.service'; 
import {EmissaoCobrancaItemService} from '../../emissaocobrancaitem/emissaocobrancaitem.service'; 

@Component({
 selector: 'gov-baixa-form', 
 templateUrl: './baixa-form.component.html', 
 //styleUrls: ['./baixa-form.component.css'] 
}) 
export class BaixaFormComponent extends CommonsForm<Baixa> implements OnInit { 

    constructor(apiService: BaixaService, 
                            private tipobaixaService: TipoBaixaService, 
                            private baixastatusService: BaixaStatusService, 
                            private contabancariaService: ContaBancariaService, 
                            private receitaService: ReceitaService, 
                            private debitoparcelaService: DebitoParcelaService, 
                            private creditobancarioitemService: CreditoBancarioItemService, 
                            private emissaocobrancaitemService: EmissaoCobrancaItemService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipobaixa': { 
                 return this.tipobaixaService; 
             } 

             case 'baixastatus': { 
                 return this.baixastatusService; 
             } 

             case 'contabancaria': { 
                 return this.contabancariaService; 
             } 

             case 'receita': { 
                 return this.receitaService; 
             } 

             case 'debitoparcela': { 
                 return this.debitoparcelaService; 
             } 

             case 'creditobancarioitem': { 
                 return this.creditobancarioitemService; 
             } 

             case 'emissaocobrancaitem': { 
                 return this.emissaocobrancaitemService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipobaixa': { 
                 return this.buildLookupFilter('trb_tipobaixa'); 
             }

             case 'baixastatus': { 
                 return this.buildLookupFilter('trb_baixastatus'); 
             }

             case 'contabancaria': { 
                 return this.buildLookupFilter('trb_contabancaria'); 
             }

             case 'receita': { 
                 return this.buildLookupFilter('trb_receita'); 
             }

             case 'debitoparcela': { 
                 return this.buildLookupFilter('trb_debitoparcela'); 
             }

             case 'creditobancarioitem': { 
                 return this.buildLookupFilter('trb_creditobancarioitem'); 
             }

             case 'emissaocobrancaitem': { 
                 return this.buildLookupFilter('trb_emissaocobrancaitem'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.baixa.id); 
     } 
} 

