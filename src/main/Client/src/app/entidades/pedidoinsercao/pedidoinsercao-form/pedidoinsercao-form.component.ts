import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PedidoInsercao} from '../pedidoinsercao'; 
import {PedidoInsercaoService} from '../pedidoinsercao.service'; 
import {AgenciaService} from '../../agencia/agencia.service'; 
import {ClienteService} from '../../cliente/cliente.service';
import {fuseAnimations} from "../../../../@fuse/animations";

import { Subscription } from 'rxjs';

//
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {PedidoInsercaoItem} from "../../pedidoinsercaoitem/pedidoinsercaoitem";
import {ImportService} from "../../../import.service";
import {PlanoMidia} from "../../planomidia/planomidia";

@Component({
 selector: 'gov-pedidoinsercao-form', 
 templateUrl: './pedidoinsercao-form.component.html', 
 styleUrls: ['./pedidoinsercao-form.component.scss'] ,
    animations   : fuseAnimations
}) 
export class PedidoInsercaoFormComponent extends CommonsForm<PedidoInsercao> implements OnInit {

    entity: any;
    data = [];

    subscription: Subscription;
    pedidoinsercaoitem: PedidoInsercaoItem;
    planoMidia: PlanoMidia;

    constructor(apiService: PedidoInsercaoService,
                private fb: FormBuilder,
                private importService: ImportService,
                private agenciaService: AgenciaService,
                private clienteService: ClienteService,
                route: ActivatedRoute,
                router: Router ) {
        super(apiService, route, router);

           }

     ngOnInit() {

         this.subscription = this.importService.titleData$.subscribe(
             res => this.data = res)

         console.log(this.data);
         this.pedidoinsercaoitem = this.data[0].pedidoinsercaoitem;
         this.planoMidia = this.data[1].planomidia;
     }

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'agencia': { 
                 return this.agenciaService; 
             } 

             case 'cliente': { 
                 return this.clienteService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'agencia': { 
                 return this.buildLookupFilter('agencia'); 
             }

             case 'cliente': { 
                 return this.buildLookupFilter('cliente'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.pedidoinsercao.id); 
     }



    //PedidoInserção reactive form
    pedidoInsercaoForm = this.fb.group({


        codigo: null,
        status: "ABERTO",
        informacoesimportantes:  "- ENVIAR NOTA FISCAL E COMPROVANTE DE VEÍCULAÇÃO PARA \n - XYZ@XYZCOMUNICACAO.COM.BR ",

        dataemissao: null,
        periodo: null,
        osagencia: null,
        totalbruto: null,
        comissao: null,
        totalliquido: null,

        vencimentotxt: "- CONTRA APRESENTAÇÃO \n\ - FATURAR APÓS TÉRMINO DA VEICULAÇÃO ",
        faturamentotxt:  "- FATURAR PELO VALOR LIQUIDO A FAVOR DO CLIENTE \n - PAGAMENTO VIA TRANSFERÊNCIA BANCÁRIA ",
        obs:  "- ENVIAR NOTA FISCAL E COMPROVANTE DE VEÍCULAÇÃO PARA \n - XYZ@XYZCOMUNICACAO.COM.BR ",
        praca: null,

        agencia_id: null,
        cliente_id: null,
        veiculo_id: null,
        campanha_id: null,
        planomidia_id: null,

        pecaList: null,
        pedidoinsercaoitemList: null,


    });

    savePedidoInsercao(){

        console.log(this.pedidoInsercaoForm.value);
        this.activeBean = this.pedidoInsercaoForm.value;
        this.save();

    }

} 

