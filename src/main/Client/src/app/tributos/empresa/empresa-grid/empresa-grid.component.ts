import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {Empresa} from '../empresa'; 
import {EmpresaService} from '../empresa.service';
import {ReportGroup} from "../../../shared/report-group";

@Component({ 
  selector: 'gov-empresa-grid', 
  templateUrl: './empresa-grid.component.html', 
  //styleUrls: ['./empresa-grid.component.css']
}) 
export class EmpresaGridComponent extends CommonsGrid<Empresa> implements OnInit {

  constructor(apiService: EmpresaService, router: Router) {
    super(apiService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onNavigateClick(filterData: FilterData): void {
    this.loadByFilter(filterData);
  }

  getDefaultFilter(): FilterData {
    const filterData = super.getDefaultFilter();
    filterData.order = 'trb_empresa.inscricao';
    filterData.codigoField = 'inscricao';
    filterData.nomeField = 'fantasia';
    return filterData;
  }

  getRowFilter(): FilterData {
    let filter= this.buildRowFilter('trb_empresa');
    filter.whereClauses[0].dataType='INTEGER';
    return filter;
  }

  getTableName(): string {
    return 'trb_empresa' ;
  }

  getFieldList(): FieldSearch[] {
    let retorno = [];
    retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM');
    retorno[1] = new FieldSearch('trb_inscricaostatus_id','trb_inscricaostatus_id','ENUM');
    retorno[2] = new FieldSearch('trb_motivostatus_id','trb_motivostatus_id','ENUM');
    retorno[3] = new FieldSearch('tipoinscricao','tipoinscricao','STRING');
    retorno[4] = new FieldSearch('datainscricao','datainscricao','DATE');
    retorno[5] = new FieldSearch('datastatus','datastatus','DATE');
    retorno[6] = new FieldSearch('databaixa','databaixa','DATE');
    retorno[7] = new FieldSearch('datasimplesnacional','datasimplesnacional','DATE');
    retorno[8] = new FieldSearch('dataadesaonfse','dataadesaonfse','DATE');
    retorno[9] = new FieldSearch('dataatualizacao','dataatualizacao','DATE');
    retorno[10] = new FieldSearch('inscricao','inscricao','STRING');
    retorno[11] = new FieldSearch('inscricaoestadual','inscricaoestadual','STRING');
    retorno[12] = new FieldSearch('inscricaoanterior','inscricaoanterior','STRING');
    retorno[13] = new FieldSearch('email','email','STRING');
    retorno[14] = new FieldSearch('trb_cnae_id','trb_cnae_id','ENUM');
    retorno[15] = new FieldSearch('trb_naturezaoperacaoempresa_id','trb_naturezaoperacaoempresa_id','ENUM');
    retorno[16] = new FieldSearch('trb_simplesnacional_id','trb_simplesnacional_id','ENUM');
    retorno[17] = new FieldSearch('trb_porteempresa_id','trb_porteempresa_id','ENUM');
    retorno[18] = new FieldSearch('trb_tipoconstituicaoempresa_id','trb_tipoconstituicaoempresa_id','ENUM');
    retorno[19] = new FieldSearch('trb_tipounidadeempresa_id','trb_tipounidadeempresa_id','ENUM');
    retorno[20] = new FieldSearch('trb_enquadramentofiscal_id','trb_enquadramentofiscal_id','ENUM');
    retorno[21] = new FieldSearch('trb_declaracaofiscal_id','trb_declaracaofiscal_id','ENUM');
    retorno[22] = new FieldSearch('trb_tipodeclarante_id','trb_tipodeclarante_id','ENUM');
    retorno[23] = new FieldSearch('trb_ramoatividade_id','trb_ramoatividade_id','ENUM');
    retorno[24] = new FieldSearch('inscricaoimobiliaria','inscricaoimobiliaria','STRING');
    retorno[25] = new FieldSearch('fantasia','fantasia','STRING');
    retorno[26] = new FieldSearch('empresamunicipio','empresamunicipio','BOOLEAN');
    retorno[27] = new FieldSearch('imunetff','imunetff','BOOLEAN');
    retorno[28] = new FieldSearch('imuneiss','imuneiss','BOOLEAN');
    retorno[29] = new FieldSearch('imunetaxavigilanciasanitaria','imunetaxavigilanciasanitaria','BOOLEAN');
    retorno[30] = new FieldSearch('imunemeioambiente','imunemeioambiente','BOOLEAN');
    retorno[31] = new FieldSearch('imunebombeiro','imunebombeiro','BOOLEAN');
    retorno[32] = new FieldSearch('numeronire','numeronire','STRING');
    retorno[33] = new FieldSearch('trb_orgaoregistroempresa_id','trb_orgaoregistroempresa_id','ENUM');
    retorno[34] = new FieldSearch('emitentenfse','emitentenfse','BOOLEAN');
    retorno[35] = new FieldSearch('contador','contador','STRING');
    retorno[36] = new FieldSearch('contador_crc','contador_crc','STRING');
    retorno[37] = new FieldSearch('cep','cep','STRING');
    retorno[38] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','NUMBER');
    retorno[39] = new FieldSearch('logradouro','logradouro','STRING');
    retorno[40] = new FieldSearch('complemento','complemento','STRING');
    retorno[41] = new FieldSearch('numero','numero','STRING');
    retorno[42] = new FieldSearch('bairro','bairro','STRING');
    retorno[43] = new FieldSearch('trb_cidade_id','trb_cidade_id','NUMBER');
    return retorno;
  }

  getReportList(): ReportGroup[] {
    return [];
  }
}
