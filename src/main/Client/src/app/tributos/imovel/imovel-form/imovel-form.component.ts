import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form';
import {FilterData} from '../../../components/interfaces';
import {CommonsService} from '../../../commons-service';
import {Imovel} from '../imovel';
import {ImovelService} from '../imovel.service';
import {InscricaoStatusService} from '../../inscricaostatus/inscricaostatus.service';
import {ContribuinteService} from '../../contribuinte/contribuinte.service';
import {PadraoConstrutivoService} from '../../padraoconstrutivo/padrao-construtivo.service';
import {LoteamentoService} from '../../loteamento/loteamento.service';
import {DistritoService} from '../../distrito/distrito.service';
import {SetorService} from '../../setor/setor.service';
import {LogradouroSegmentoService} from '../../logradourosegmento/logradourosegmento.service';
import {LogradouroService} from '../../logradouro/logradouro.service';
import {CondominioService} from '../../condominio/condominio.service';
import {BairroService} from '../../bairro/bairro.service';
import {TipoImovelService} from '../../tipoimovel/tipoimovel.service';
import {TipoUnidadeService} from '../../tipounidade/tipounidade.service';
import {MotivoStatusService} from '../../motivostatus/motivostatus.service';
import {SharedService} from "../../../shared/shared.service";
import {BciItemGridComponent} from "../../bciitem/bciitem-grid/bciitem-grid.component";

@Component({
  selector: 'gov-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.css']
})
export class ImovelFormComponent extends CommonsForm<Imovel> implements OnInit {


  public bciGrid:BciItemGridComponent ;

  constructor(apiService: ImovelService,
              private inscricaostatusService: InscricaoStatusService,
              private contribuinteService: ContribuinteService,
              private padraoconstrutivoService: PadraoConstrutivoService,
              private loteamentoService: LoteamentoService,
              private distritoService: DistritoService,
              private setorService: SetorService,
              private logradourosegmentoService: LogradouroSegmentoService,
              private logradouroService: LogradouroService,
              private condominioService: CondominioService,
              private bairroService: BairroService,
              private tipoimovelService: TipoImovelService,
              private tipounidadeService: TipoUnidadeService,
              private motivostatusService: MotivoStatusService,
              public sharedService: SharedService,
              route: ActivatedRoute,
              router: Router) {
    super(apiService, route,router);
  }

  ngOnInit() {
    super.ngOnInit();
  }


  getLookupService(lookupName: string): CommonsService<any> {
    switch (lookupName) {
      case 'inscricaostatus': {
        return this.inscricaostatusService;
      }

      case 'contribuinte': {
        return this.contribuinteService;
      }

      case 'padraoconstrutivo': {
        return this.padraoconstrutivoService;
      }

      case 'loteamento': {
        return this.loteamentoService;
      }

      case 'distrito': {
        return this.distritoService;
      }

      case 'setor': {
        return this.setorService;
      }

      case 'logradourosegmento': {
        return this.logradourosegmentoService;
      }

      case 'logradouro': {
        return this.logradouroService;
      }

      case 'condominio': {
        return this.condominioService;
      }

      case 'bairro': {
        return this.bairroService;
      }

      case 'tipoimovel': {
        return this.tipoimovelService;
      }

      case 'tipounidade': {
        return this.tipounidadeService;
      }

      case 'motivostatus': {
        return this.motivostatusService;
      }

      default: {
        console.log('serviço não disponibilizado para ', lookupName)
        return this.apiService;
      }
    }
  }

  getDeLookupFilter(lookupValue: any): FilterData {
    switch (lookupValue.name) {
      case 'inscricaostatus': {
        return this.buildLookupFilter('trb_inscricaostatus');
      }

      case 'contribuinte': {
        return this.buildLookupFilter('trb_contribuinte');
      }

      case 'padraoconstrutivo': {
        return this.buildLookupFilter('trb_padraoconstrutivo');
      }

      case 'loteamento': {
        return this.buildLookupFilter('trb_loteamento');
      }

      case 'distrito': {
        return this.buildLookupFilter('trb_distrito');
      }

      case 'setor': {
        return this.buildLookupFilter('trb_setor');
      }

      case 'logradourosegmento': {
        return this.buildLookupFilter('trb_logradourosegmento');
      }

      case 'logradouro': {
        return this.buildLookupFilter('trb_logradouro');
      }

      case 'condominio': {
        return this.buildLookupFilter('trb_condominio');
      }

      case 'bairro': {
        return this.buildLookupFilter('trb_bairro');
      }

      case 'tipoimovel': {
        return this.buildLookupFilter('trb_tipoimovel');
      }

      case 'tipounidade': {
        return this.buildLookupFilter('trb_tipounidade');
      }

      case 'motivostatus': {
        return this.buildLookupFilter('trb_motivostatus');
      }

      default: {
        console.log('filtro não disponibilizado para ', lookupValue.name)
      }
    }
    return null;
  }

  onButtonActionClick(): void {
    //console.log(this.activeBean.imovel.id);
  }
} 

