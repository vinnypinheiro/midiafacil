import {Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import {Operation} from "../../../utils/utils";
import {CommonsService} from "../../../commons-service";
import {CommonsForm} from "../../../commons-form";
import {ActivatedRoute, Router} from "@angular/router";
import {FilterData} from "../../../components/interfaces";
import {PedidoInsercao} from "../pedidoinsercao";
import {PedidoInsercaoService} from "../pedidoinsercao.service";

import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {TipoMidiaService} from "../../tipomidia/tipomidia.service";
import {TipoMidia} from "../../tipomidia/tipomidia";
import {Veiculo} from "../../veiculo/veiculo";
import {VeiculoService} from "../../veiculo/veiculo.service";
import {SharedService} from "../../../shared/shared.service";

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';


@Component({
  selector: 'app-pedidoinsercao-view',
  templateUrl: './pedidoinsercao-view.component.html',
  styleUrls: ['./pedidoinsercao-view.component.scss'],
    animations   : fuseAnimations
})
export class PedidoinsercaoViewComponent extends CommonsForm<PedidoInsercao> implements OnInit {

    entity: any;
    tipoMidia: TipoMidia[] = [];
    veiculoList: Veiculo [] = [];


    constructor( private _fuseSidebarService: FuseSidebarService,
                 private tipoMidiaService: TipoMidiaService,
                 private veiculoService: VeiculoService,
                 private fb: FormBuilder,
                 private sharedService: SharedService,
                 apiService: PedidoInsercaoService,
                 route: ActivatedRoute,
                 router: Router ) {

        super(apiService, route, router);
    }

  ngOnInit() {

      this.beanSubscribe = this.route.params.subscribe(params => {
          this.beanId = params['id'];
          if (this.beanId === "novo") {
              this.beanId = "";
              this.operation = Operation.CREATE;
          } else {
              this.operation = Operation.SELECT;
              this.apiService.findById(this.beanId).subscribe(response => {
                  this.activeBean = (<any>response);
                  this.entity = this.activeBean;
                  console.log(this.activeBean)


              });
          }
      });

      this.tipoMidiaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.tipoMidia = response.content;

          this.veiculoService.loadByFilter(this.getDefaultFilter()).subscribe( response =>{
              this.veiculoList = response.content;
          });

      });

      this.setPecaArray();

  }

    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }


    //Plano Midia reactive form
    activeForm = this.fb.group({
        id: [''],
        obs:  [''],
        data: [''],
        agencia_id:  [''],
        cliente_id:  [''],

        pecalist: this.fb.array([this.addPecaListGroup()]),
        pedidoDeInsercaoItemlist: this.fb.array([this.addpedidoDeInsercaoItemlistGroup()])

    });

    addPecaListGroup() {
        return this.fb.group({
            peca:  [null],
            titulo:  [null],
            duracap: [null],
            pedidoinsercao_id:  [null],
            tipomidia_id: [null],

        });
    }

    setPecaArray(){

        this.operation = Operation.SELECT;
        this.apiService.findById(this.beanId).subscribe(response => {
            this.activeBean = (<any>response);
            this.entity = this.activeBean;
            console.log(this.activeBean);

            let control = <FormArray>this.activeForm.controls.pecalist;
            this.entity.pecalist.forEach(x => {
                control.push(this.fb.group({
                    peca: x.peca,
                    titulo: x.titulo,
                    duracao: x.duracao
                }))
            });


        });



    }

    printReport(reportname: string, id: number) {
        this.sharedService.printReport(reportname, id)
    }



    addpedidoDeInsercaoItemlistGroup() {
        return this.fb.group({
            data:  [null],
            mes:  [null],
            ano:  [null],
            desconto:  [null],
            dia01:  [null],
            dia02:  [null],
            dia03:  [null],
            dia04:  [null],
            dia05:  [null],
            dia06:  [null],
            dia07:  [null],
            dia08:  [null],
            dia09:  [null],
            dia10:  [null],
            dia11:  [null],
            dia12:  [null],
            dia13:  [null],
            dia14:  [null],
            dia15:  [null],
            dia16:  [null],
            dia17:  [null],
            dia18:  [null],
            dia19:  [null],
            dia20:  [null],
            dia21:  [null],
            dia22:  [null],
            dia23:  [null],
            dia24:  [null],
            dia25:  [null],
            dia26:  [null],
            dia27:  [null],
            dia28:  [null],
            dia29:  [null],
            dia30:  [null],
            dia31:  [null],
            obs: [null],
            qtd:  [null],
            valor:  [null],
            valorUnit:  [null],
            vencimento: [null],
            pedidoinsercao_id :  [null],
            veiculo_id :  [null],
            peca_id :  [null],
            programa_id :  [null],

        });
    }

    getDeLookupFilter(lookupValue: any): FilterData {
        switch (lookupValue.name) {


            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name)
            }
        }
        return null;
    }

    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {


            default: {
                console.log('serviço não disponibilizado para ', lookupName)
                return this.apiService;
            }
        }
    }


}
