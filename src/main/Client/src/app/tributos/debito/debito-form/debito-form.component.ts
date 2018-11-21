import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form';
import {FilterData} from '../../../components/interfaces';
import {CommonsService} from '../../../commons-service';
import {Debito} from '../debito';
import {DebitoService} from '../debito.service';
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service';
import {TributoService} from '../../tributo/tributo.service';
import {TipoDebitoService} from '../../tipodebito/tipodebito.service';

@Component({
  selector: 'gov-debito-form',
  templateUrl: './debito-form.component.html',
  //styleUrls: ['./debito-form.component.css']
})
export class DebitoFormComponent extends CommonsForm<Debito> implements OnInit {

  constructor(apiService: DebitoService,
              private unidadegestoraService: UnidadeGestoraService,
              private tributoService: TributoService,
              private tipodebitoService: TipoDebitoService,
              route: ActivatedRoute,
              router: Router) {
    super(apiService, route, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getLookupService(lookupName: string): CommonsService<any> {
    switch (lookupName) {
      case 'unidadegestora': {
        return this.unidadegestoraService;
      }

      case 'tributo': {
        return this.tributoService;
      }

      case 'tipodebito': {
        return this.tipodebitoService;
      }

      default: {
        console.log('serviço não disponibilizado para ', lookupName)
        return this.apiService;
      }
    }
  }

  getDeLookupFilter(lookupValue: any): FilterData {
    switch (lookupValue.name) {
      case 'unidadegestora': {
        return this.buildLookupFilter('trb_unidadegestora');
      }

      case 'tributo': {
        return this.buildLookupFilter('trb_tributo');
      }

      case 'tipodebito': {
        return this.buildLookupFilter('trb_tipodebito');
      }

      default: {
        console.log('filtro não disponibilizado para ', lookupValue.name)
      }
    }
    return null;
  }

  onButtonActionClick(): void {
    //console.log(this.activeBean.debito.id);
  }


} 

