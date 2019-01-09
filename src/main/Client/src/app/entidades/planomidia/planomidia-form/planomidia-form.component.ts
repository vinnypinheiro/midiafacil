import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form';
import {FilterData} from '../../../components/interfaces';
import {CommonsService} from '../../../commons-service';
import {PlanoMidia} from '../planomidia';
import {PlanoMidiaService} from '../planomidia.service';
import {AgenciaService} from '../../agencia/agencia.service';
import {CampanhaService} from '../../campanha/campanha.service';
import {ClienteService} from '../../cliente/cliente.service';
import {TipoMidia} from "../../tipomidia/tipomidia";
import {TipoMidiaService} from "../../tipomidia/tipomidia.service";
import {SharedService} from "../../../shared/shared.service";

import {DomainBase, Operation} from '../../../utils/utils';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';


// import entidades

//peca
import {Peca} from "../../peca/peca";
import {PecaService} from "../../peca/peca.service";
import {VeiculoService} from "../../veiculo/veiculo.service"

//cliente


//PedidoInsercaoItem
import {PedidoInsercaoItem} from "../../pedidoinsercaoitem/pedidoinsercaoitem";
import {PedidoInsercaoItemService} from "../../pedidoinsercaoitem/pedidoinsercaoitem.service";
import {Cliente} from "../../cliente/cliente";
import {Agencia} from "../../agencia/agencia";
import {Veiculo} from "../../veiculo/veiculo"
import { Programa } from '../../programa/programa';
import {fuseAnimations} from "../../../../@fuse/animations";
import {TipoMidiaDigital} from "../../tipomidiadigital/tipomidiadigital";
import {Campanha} from "../../campanha/campanha";

declare var $;

@Component({
  selector: 'gov-planomidia-form',
  templateUrl: './planomidia-form.component.html',
    animations   : fuseAnimations,
    styleUrls: ['./media-plan-form.component.scss']
})
export class PlanoMidiaFormComponent extends CommonsForm<PlanoMidia> implements OnInit {

  peca: Peca = <Peca>{};
  pedidoinsercaoitem: PedidoInsercaoItem = <PedidoInsercaoItem>{};

    public verticalStepperStep1: any;
    public verticalStepperStep2: any;
    public verticalStepperStep3: any;


  planoMidia: PlanoMidia[] = [];
  tipoMidia: TipoMidia[] = [];
  cliente: Cliente[] = [];
  agencia: Agencia[] = [];
  veiculo: Veiculo[] = [];
  campanha: Campanha[] = [];
  programaListGrade: Programa[] = [];



  constructor(private fb: FormBuilder,
              apiService: PlanoMidiaService,
              private agenciaService: AgenciaService,
              private campanhaService: CampanhaService,
              private clienteService: ClienteService,
              private pecaService: PecaService,
              private veiculoService: VeiculoService,
              private pedidoinsercaoitemservice: PedidoInsercaoItemService,
              private planoMidiaService: PlanoMidiaService,
              private tipoMidiaService: TipoMidiaService,
              private sharedService: SharedService,
              route: ActivatedRoute,
              router: Router) {
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

                  console.log(this.activeBean)


                  this.activeForm.patchValue({
                      id: this.activeBean.id,
                      obs: this.activeBean.obs,
                      data: this.activeBean.data,
                      agencia_id: this.activeBean.agencia_id,
                      cliente_id: this.activeBean.cliente_id,


                  });

                  // this.setEnderecosArray();

              });
          }


      });

      this.planoMidiaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.planoMidia = response.content;


      });

      this.tipoMidiaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.tipoMidia = response.content;

      });

      this.clienteService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.cliente = response.content;

      });

      this.agenciaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.agencia = response.content;

      });

      this.veiculoService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.veiculo = response.content;

      });

      this.campanhaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.campanha = response.content;

      });

  }


    //Cliente reactive form
    activeForm = this.fb.group({
        id:  null,
        obs:   null,
        data:  null,
        osagencia: null,
        desconto: 20,
        tipo: null,
        agencia_id:   null,
        cliente_id:   null,
        campanha_id: null,
        situacao:  null,
/*

        pecalist: this.fb.array([this.addPecaListGroup()]),
        pedidoDeInsercaoItemlist: this.fb.array([this.addpedidoDeInsercaoItemlistGroup()]),*/

    });

    saveEntity() {
        // TODO: Use EventEmitter with form value
        console.warn(this.activeForm.value);
        this.activeBean = this.activeForm.value;
        this.save();
        //this.apiService.save(this.clienteForm.value);
    }


    addPecaListGroup() {
        return this.fb.group({
            peca:  [null],
            titulo:  [null],
            planomidia_id:  [null],
            tipomidia_id: [null],

        });
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
        planomidia_id :  [null],
        veiculo_id :  [null],
        peca_id :  [null],
        programa_id :  [null],

        });
    }


public setPrice(event): void {  // event will give you full breif of action
  const newVal = event.target.value;
  this.pedidoinsercaoitem.valorUnit =  this.pedidoinsercaoitem.programa_id.valor;
}


  getDefaultFilter() {
    return <FilterData>{
      page: 1,
      limit: 300,
      whereClauses: []
    };
  }

  getLookupService(lookupName: string): CommonsService<any> {
    switch (lookupName) {
      case 'agencia': {
        return this.agenciaService;
      }

      case 'campanha': {
        return this.campanhaService;
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

  savePeca() {


    if(!this.activeBean.pecalist){
      this.activeBean.pecalist = [];
    }
    this.activeBean.pecalist.push(this.peca);


    this.peca = <Peca>{};

  }

  saveGrade() {
 
  if(!this.activeBean.pedidoDeInsercaoItemlist){
      this.activeBean.pedidoDeInsercaoItemlist = [];
   }
   this.activeBean.pedidoDeInsercaoItemlist.push(this.pedidoinsercaoitem);
   this.pedidoinsercaoitem = <PedidoInsercaoItem>{};


  }


  getDeLookupFilter(lookupValue: any): FilterData {
    switch (lookupValue.name) {
      case 'agencia': {
        return this.buildLookupFilter('agencia');
      }

      case 'campanha': {
        return this.buildLookupFilter('campanha');
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
    //console.log(this.activeBean.planomidia.id);
  }

  printReport(reportname: string, id: number) {
    this.sharedService.printReport(reportname, id)
  }

  editPeca(peca: Peca) {
    this.peca = peca;
  }

}

