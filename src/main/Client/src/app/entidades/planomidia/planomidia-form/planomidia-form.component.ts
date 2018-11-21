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

// import entidades

//peca
import {Peca} from "../../peca/peca";
import {PecaService} from "../../peca/peca.service";

//cliente


//PedidoInsercaoItem
import {PedidoInsercaoItem} from "../../pedidoinsercaoitem/pedidoinsercaoitem";
import {PedidoInsercaoItemService} from "../../pedidoinsercaoitem/pedidoinsercaoitem.service";
import {Cliente} from "../../cliente/cliente";
import {Agencia} from "../../agencia/agencia";

declare var $;

@Component({
  selector: 'gov-planomidia-form',
  templateUrl: './planomidia-form.component.html',
  //styleUrls: ['./planomidia-form.component.css']
})
export class PlanoMidiaFormComponent extends CommonsForm<PlanoMidia> implements OnInit {

  peca: Peca = <Peca>{};
  pedidoinsercaoitem: PedidoInsercaoItem = <PedidoInsercaoItem>{};


  planoMidia: PlanoMidia[] = [];
  tipoMidia: TipoMidia[] = [];
  cliente: Cliente[] = [];
  agencia: Agencia[] = [];



  constructor(apiService: PlanoMidiaService,
              private agenciaService: AgenciaService,
              private campanhaService: CampanhaService,
              private clienteService: ClienteService,
              private pecaService: PecaService,
              private pedidoinsercaoitemservice: PedidoInsercaoItemService,
              private planoMidiaService: PlanoMidiaService,
              private tipoMidiaService: TipoMidiaService,
              private sharedService: SharedService,
              route: ActivatedRoute,
              router: Router) {
    super(apiService, route, router);
  }

  ngOnInit() {
    super.ngOnInit();

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




  }

  getDefaultFilter() {
    return <FilterData>{
      page: 1,
      limit: 50,
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

   this.peca.planomidia_id = this.activeBean;

    this.pecaService.save(this.peca).subscribe(response => {
      console.log(response);

    });

    if(!this.activeBean.pecalist){
      this.activeBean.pecalist = [];
    }
    this.activeBean.pecalist.push(this.peca);


    this.peca = <Peca>{};
    $("#myModal4").modal("hide");

  }

  saveGrade() {
  this.pedidoinsercaoitem.planomidia_id = this.activeBean;

  this.pedidoinsercaoitemservice.save(this.pedidoinsercaoitem).subscribe(response => {

   console.log(response);

  });

  if(!this.activeBean.pedidoDeInsercaoItemlist){
      this.activeBean.pedidoDeInsercaoItemlist = [];
   }
   this.activeBean.pedidoDeInsercaoItemlist.push(this.pedidoinsercaoitem);


   this.pedidoinsercaoitem = <PedidoInsercaoItem>{};
    $("#gradeModalItem").modal("hide");

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
    $("#myModal4").modal();
  }

}

