(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-peca-peca-module"],{

/***/ "./src/app/entidades/peca/peca-form/peca-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/entidades/peca/peca-form/peca-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>Peca</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/peca\">Peca</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO CENTIMETROS--> \n         <div class=\"form-group col-sm-4\"> \n             <label class=\"col-sm-2 control-label\">centimetros</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\" \n                        class=\"form-control\" \n                        [(ngModel)]=\"activeBean.centimetros\" />\n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO COLUNAS--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">colunas</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.colunas\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO DURACAO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">duracao</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.duracao\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO PECA--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">peca</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.peca\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO TITULO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">titulo</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.titulo\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO FORMATO_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">formato_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"formato_id\" \n                                   [(ngModel)]=\"activeBean.formato_id_id\" \n                                   [code]=\"activeBean.formato_id_codigo\" \n                                   [description]=\"activeBean.formato_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item formato_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n         <!--CAMPO FORMATOREVISTA_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">formatorevista_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"formatorevista_id\" \n                                   [(ngModel)]=\"activeBean.formatorevista_id_id\" \n                                   [code]=\"activeBean.formatorevista_id_codigo\" \n                                   [description]=\"activeBean.formatorevista_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item formatorevista_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n         <!--CAMPO MATERIAL_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">material_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"material_id\" \n                                   [(ngModel)]=\"activeBean.material_id_id\" \n                                   [code]=\"activeBean.material_id_codigo\" \n                                   [description]=\"activeBean.material_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item material_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n         <!--CAMPO PLANOMIDIA_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">planomidia_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"planomidia_id\" \n                                   [(ngModel)]=\"activeBean.planomidia_id_id\" \n                                   [code]=\"activeBean.planomidia_id_codigo\" \n                                   [description]=\"activeBean.planomidia_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item planomidia_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n         <!--CAMPO TIPOMIDIA_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">tipomidia_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"tipomidia_id\" \n                                   [(ngModel)]=\"activeBean.tipomidia_id_id\" \n                                   [code]=\"activeBean.tipomidia_id_codigo\" \n                                   [description]=\"activeBean.tipomidia_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item tipomidia_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n         <!--CAMPO TIPOMIDIADIGITAL_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">tipomidiadigital_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"tipomidiadigital_id\" \n                                   [(ngModel)]=\"activeBean.tipomidiadigital_id_id\" \n                                   [code]=\"activeBean.tipomidiadigital_id_codigo\" \n                                   [description]=\"activeBean.tipomidiadigital_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item tipomidiadigital_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/peca/peca-form/peca-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/entidades/peca/peca-form/peca-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: PecaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecaFormComponent", function() { return PecaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _peca_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../peca.service */ "./src/app/entidades/peca/peca.service.ts");
/* harmony import */ var _formato_formato_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../formato/formato.service */ "./src/app/entidades/formato/formato.service.ts");
/* harmony import */ var _formatorevista_formatorevista_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../formatorevista/formatorevista.service */ "./src/app/entidades/formatorevista/formatorevista.service.ts");
/* harmony import */ var _material_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.service */ "./src/app/entidades/material/material.service.ts");
/* harmony import */ var _planomidia_planomidia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../planomidia/planomidia.service */ "./src/app/entidades/planomidia/planomidia.service.ts");
/* harmony import */ var _tipomidia_tipomidia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tipomidia/tipomidia.service */ "./src/app/entidades/tipomidia/tipomidia.service.ts");
/* harmony import */ var _tipomidiadigital_tipomidiadigital_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tipomidiadigital/tipomidiadigital.service */ "./src/app/entidades/tipomidiadigital/tipomidiadigital.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PecaFormComponent = /** @class */ (function (_super) {
    __extends(PecaFormComponent, _super);
    function PecaFormComponent(apiService, formatoService, formatorevistaService, materialService, planomidiaService, tipomidiaService, tipomidiadigitalService, route, router) {
        var _this = _super.call(this, apiService, route, router) || this;
        _this.formatoService = formatoService;
        _this.formatorevistaService = formatorevistaService;
        _this.materialService = materialService;
        _this.planomidiaService = planomidiaService;
        _this.tipomidiaService = tipomidiaService;
        _this.tipomidiadigitalService = tipomidiadigitalService;
        return _this;
    }
    PecaFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    PecaFormComponent.prototype.getLookupService = function (lookupName) {
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
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    PecaFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
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
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    PecaFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.peca.id); 
    };
    PecaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-peca-form',
            template: __webpack_require__(/*! ./peca-form.component.html */ "./src/app/entidades/peca/peca-form/peca-form.component.html"),
        }),
        __metadata("design:paramtypes", [_peca_service__WEBPACK_IMPORTED_MODULE_3__["PecaService"],
            _formato_formato_service__WEBPACK_IMPORTED_MODULE_4__["FormatoService"],
            _formatorevista_formatorevista_service__WEBPACK_IMPORTED_MODULE_5__["FormatoRevistaService"],
            _material_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"],
            _planomidia_planomidia_service__WEBPACK_IMPORTED_MODULE_7__["PlanoMidiaService"],
            _tipomidia_tipomidia_service__WEBPACK_IMPORTED_MODULE_8__["TipoMidiaService"],
            _tipomidiadigital_tipomidiadigital_service__WEBPACK_IMPORTED_MODULE_9__["TipoMidiaDigitalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PecaFormComponent);
    return PecaFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/peca/peca-grid/peca-grid.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/entidades/peca/peca-grid/peca-grid.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> Peca </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>Peca</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************imprimir************************************************-->\n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">centimetros</th> \n                         <th style=\"width: auto\">colunas</th> \n                         <th style=\"width: auto\">duracao</th> \n                         <th style=\"width: auto\">peca</th> \n                         <th style=\"width: auto\">titulo</th> \n                         <th style=\"width: auto\">formato_id</th> \n                         <th style=\"width: auto\">formatorevista_id</th> \n                         <th style=\"width: auto\">material_id</th> \n                         <th style=\"width: auto\">planomidia_id</th> \n                         <th style=\"width: auto\">tipomidia_id</th> \n                         <th style=\"width: auto\">tipomidiadigital_id</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.centimetros}}</td> \n                     <td>{{row.colunas}}</td> \n                     <td>{{row.duracao}}</td> \n                     <td>{{row.peca}}</td> \n                     <td>{{row.titulo}}</td> \n                     <td>{{row.formato_id_nome }}</td> \n                     <td>{{row.formatorevista_id_nome }}</td> \n                     <td>{{row.material_id_nome }}</td> \n                     <td>{{row.planomidia_id_nome }}</td> \n                     <td>{{row.tipomidia_id_nome }}</td> \n                     <td>{{row.tipomidiadigital_id_nome }}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/peca/peca-grid/peca-grid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/entidades/peca/peca-grid/peca-grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: PecaGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecaGridComponent", function() { return PecaGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _peca_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../peca.service */ "./src/app/entidades/peca/peca.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PecaGridComponent = /** @class */ (function (_super) {
    __extends(PecaGridComponent, _super);
    function PecaGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    PecaGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    PecaGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    PecaGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = 'peca.centimetros, peca.colunas, peca.duracao, peca.peca, peca.titulo, peca.formato_id, peca.formatorevista_id, peca.material_id, peca.planomidia_id, peca.tipomidia_id ';
        return filterData;
    };
    PecaGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_peca');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    PecaGridComponent.prototype.getTableName = function () {
        return 'peca';
    };
    PecaGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        retorno[0] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('centimetros', 'centimetros', 'LOOKUP');
        retorno[1] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('colunas', 'colunas', 'STRING');
        retorno[2] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('duracao', 'duracao', 'STRING');
        retorno[3] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('peca', 'peca', 'STRING');
        retorno[4] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('titulo', 'titulo', 'STRING');
        retorno[5] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('formato_id', 'formato_id', 'ENUM');
        retorno[6] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('formatorevista_id', 'formatorevista_id', 'ENUM');
        retorno[7] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('material_id', 'material_id', 'ENUM');
        retorno[8] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('planomidia_id', 'planomidia_id', 'ENUM');
        retorno[9] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('tipomidia_id', 'tipomidia_id', 'ENUM');
        return retorno;
    };
    PecaGridComponent.prototype.getReportList = function () {
        return [];
    };
    PecaGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-peca-grid',
            template: __webpack_require__(/*! ./peca-grid.component.html */ "./src/app/entidades/peca/peca-grid/peca-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_peca_service__WEBPACK_IMPORTED_MODULE_4__["PecaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PecaGridComponent);
    return PecaGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_3__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/peca/peca.module.ts":
/*!***********************************************!*\
  !*** ./src/app/entidades/peca/peca.module.ts ***!
  \***********************************************/
/*! exports provided: PecaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecaModule", function() { return PecaModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _peca_grid_peca_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peca-grid/peca-grid.component */ "./src/app/entidades/peca/peca-grid/peca-grid.component.ts");
/* harmony import */ var _peca_form_peca_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peca-form/peca-form.component */ "./src/app/entidades/peca/peca-form/peca-form.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    {
        path: '',
        component: _peca_grid_peca_grid_component__WEBPACK_IMPORTED_MODULE_1__["PecaGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _peca_form_peca_form_component__WEBPACK_IMPORTED_MODULE_2__["PecaFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var PecaModule = /** @class */ (function () {
    function PecaModule() {
    }
    PecaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _peca_grid_peca_grid_component__WEBPACK_IMPORTED_MODULE_1__["PecaGridComponent"],
                _peca_form_peca_form_component__WEBPACK_IMPORTED_MODULE_2__["PecaFormComponent"],
            ],
            entryComponents: [_peca_grid_peca_grid_component__WEBPACK_IMPORTED_MODULE_1__["PecaGridComponent"], _peca_form_peca_form_component__WEBPACK_IMPORTED_MODULE_2__["PecaFormComponent"]],
            schemas: [],
            providers: []
        })
    ], PecaModule);
    return PecaModule;
}());



/***/ })

}]);
//# sourceMappingURL=entidades-peca-peca-module.js.map