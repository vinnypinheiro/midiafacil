(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-mailpi-mailpi-module"],{

/***/ "./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>MailPi</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/mailpi\">MailPi</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO ASSUNTO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">assunto</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.assunto\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO DATAENVIO--> \n         <div class='form-group col-sm-4' \n>             <label class=\"col-sm-2 control-label\">dataenvio</label> \n             <div class=\"col-sm-10\"> \n                 <div class=\"input-group date\"> \n                     <input type=\"text\" \n                            class=\"form-control input-sm\" \n                            name=\"dataenvio\" \n                            [ngModel]=\"activeBean.dataenvio |date:'dd/MM/yyyy'\" \n                            [readonly]=\"operation==Operation.SELECT\"/> \n                     <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span> \n                 </div> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO PARA--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">para</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.para\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO VEICULO_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">veiculo_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"veiculo_id\" \n                                   [(ngModel)]=\"activeBean.veiculo_id_id\" \n                                   [code]=\"activeBean.veiculo_id_codigo\" \n                                   [description]=\"activeBean.veiculo_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item veiculo_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: MailPiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailPiFormComponent", function() { return MailPiFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _mailpi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mailpi.service */ "./src/app/entidades/mailpi/mailpi.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/entidades/cliente/cliente.service.ts");
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





var MailPiFormComponent = /** @class */ (function (_super) {
    __extends(MailPiFormComponent, _super);
    function MailPiFormComponent(apiService, clienteService, route, router) {
        var _this = _super.call(this, apiService, route, router) || this;
        _this.clienteService = clienteService;
        return _this;
    }
    MailPiFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    MailPiFormComponent.prototype.getLookupService = function (lookupName) {
        switch (lookupName) {
            case 'cliente': {
                return this.clienteService;
            }
            default: {
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    MailPiFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
        switch (lookupValue.name) {
            case 'cliente': {
                return this.buildLookupFilter('cliente');
            }
            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    MailPiFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.mailpi.id); 
    };
    MailPiFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-mailpi-form',
            template: __webpack_require__(/*! ./mailpi-form.component.html */ "./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.html"),
        }),
        __metadata("design:paramtypes", [_mailpi_service__WEBPACK_IMPORTED_MODULE_3__["MailPiService"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MailPiFormComponent);
    return MailPiFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> MailPi </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>MailPi</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************************************************************--> \n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">assunto</th> \n                         <th style=\"width: auto\">dataenvio</th> \n                         <th style=\"width: auto\">para</th> \n                         <th style=\"width: auto\">veiculo_id</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.assunto}}</td> \n                     <td>{{row.dataenvio}}</td> \n                     <td>{{row.para}}</td> \n                     <td>{{row.veiculo_id_nome }}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.ts ***!
  \***********************************************************************/
/*! exports provided: MailPiGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailPiGridComponent", function() { return MailPiGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _mailpi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mailpi.service */ "./src/app/entidades/mailpi/mailpi.service.ts");
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





var MailPiGridComponent = /** @class */ (function (_super) {
    __extends(MailPiGridComponent, _super);
    function MailPiGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    MailPiGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    MailPiGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    MailPiGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = 'mailpi.assunto, mailpi.dataenvio, mailpi.para ';
        return filterData;
    };
    MailPiGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_mailpi');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    MailPiGridComponent.prototype.getTableName = function () {
        return 'mailpi';
    };
    MailPiGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        retorno[0] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('assunto', 'assunto', 'STRING');
        retorno[1] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('dataenvio', 'dataenvio', 'DATE');
        retorno[2] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('para', 'para', 'STRING');
        return retorno;
    };
    MailPiGridComponent.prototype.getReportList = function () {
        return [];
    };
    MailPiGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-mailpi-grid',
            template: __webpack_require__(/*! ./mailpi-grid.component.html */ "./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_mailpi_service__WEBPACK_IMPORTED_MODULE_4__["MailPiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MailPiGridComponent);
    return MailPiGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_3__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/mailpi/mailpi.module.ts":
/*!***************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi.module.ts ***!
  \***************************************************/
/*! exports provided: MailPiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailPiModule", function() { return MailPiModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mailpi_grid_mailpi_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailpi-grid/mailpi-grid.component */ "./src/app/entidades/mailpi/mailpi-grid/mailpi-grid.component.ts");
/* harmony import */ var _mailpi_form_mailpi_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailpi-form/mailpi-form.component */ "./src/app/entidades/mailpi/mailpi-form/mailpi-form.component.ts");
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
        component: _mailpi_grid_mailpi_grid_component__WEBPACK_IMPORTED_MODULE_1__["MailPiGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _mailpi_form_mailpi_form_component__WEBPACK_IMPORTED_MODULE_2__["MailPiFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var MailPiModule = /** @class */ (function () {
    function MailPiModule() {
    }
    MailPiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _mailpi_grid_mailpi_grid_component__WEBPACK_IMPORTED_MODULE_1__["MailPiGridComponent"],
                _mailpi_form_mailpi_form_component__WEBPACK_IMPORTED_MODULE_2__["MailPiFormComponent"],
            ],
            entryComponents: [_mailpi_grid_mailpi_grid_component__WEBPACK_IMPORTED_MODULE_1__["MailPiGridComponent"], _mailpi_form_mailpi_form_component__WEBPACK_IMPORTED_MODULE_2__["MailPiFormComponent"]],
            schemas: [],
            providers: []
        })
    ], MailPiModule);
    return MailPiModule;
}());



/***/ }),

/***/ "./src/app/entidades/mailpi/mailpi.service.ts":
/*!****************************************************!*\
  !*** ./src/app/entidades/mailpi/mailpi.service.ts ***!
  \****************************************************/
/*! exports provided: MailPiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailPiService", function() { return MailPiService; });
/* harmony import */ var _commons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons-service */ "./src/app/commons-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var MailPiService = /** @class */ (function (_super) {
    __extends(MailPiService, _super);
    function MailPiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MailPiService.prototype.getPathModule = function () {
        return 'mailpi';
    };
    MailPiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MailPiService);
    return MailPiService;
}(_commons_service__WEBPACK_IMPORTED_MODULE_0__["CommonsService"]));



/***/ })

}]);
//# sourceMappingURL=entidades-mailpi-mailpi-module.js.map