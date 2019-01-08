(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-faturamentopadrao-faturamentopadrao-module"],{

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>FaturamentoPadrao</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/faturamentopadrao\">FaturamentoPadrao</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO DESCRICAO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">descricao</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.descricao\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO TEXTO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">texto</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.texto\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FaturamentoPadraoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaturamentoPadraoFormComponent", function() { return FaturamentoPadraoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _faturamentopadrao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faturamentopadrao.service */ "./src/app/entidades/faturamentopadrao/faturamentopadrao.service.ts");
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




var FaturamentoPadraoFormComponent = /** @class */ (function (_super) {
    __extends(FaturamentoPadraoFormComponent, _super);
    function FaturamentoPadraoFormComponent(apiService, route, router) {
        return _super.call(this, apiService, route, router) || this;
    }
    FaturamentoPadraoFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    FaturamentoPadraoFormComponent.prototype.getLookupService = function (lookupName) {
        switch (lookupName) {
            default: {
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    FaturamentoPadraoFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
        switch (lookupValue.name) {
            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    FaturamentoPadraoFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.faturamentopadrao.id); 
    };
    FaturamentoPadraoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-faturamentopadrao-form',
            template: __webpack_require__(/*! ./faturamentopadrao-form.component.html */ "./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.html"),
        }),
        __metadata("design:paramtypes", [_faturamentopadrao_service__WEBPACK_IMPORTED_MODULE_3__["FaturamentoPadraoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FaturamentoPadraoFormComponent);
    return FaturamentoPadraoFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> FaturamentoPadrao </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>FaturamentoPadrao</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************************************************************--> \n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">descricao</th> \n                         <th style=\"width: auto\">texto</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.descricao}}</td> \n                     <td>{{row.texto}}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FaturamentoPadraoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaturamentoPadraoGridComponent", function() { return FaturamentoPadraoGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _faturamentopadrao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faturamentopadrao.service */ "./src/app/entidades/faturamentopadrao/faturamentopadrao.service.ts");
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





var FaturamentoPadraoGridComponent = /** @class */ (function (_super) {
    __extends(FaturamentoPadraoGridComponent, _super);
    function FaturamentoPadraoGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    FaturamentoPadraoGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    FaturamentoPadraoGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    FaturamentoPadraoGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = 'faturamentopadrao.descricao ';
        return filterData;
    };
    FaturamentoPadraoGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_faturamentopadrao');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    FaturamentoPadraoGridComponent.prototype.getTableName = function () {
        return 'faturamentopadrao';
    };
    FaturamentoPadraoGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        retorno[0] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('descricao', 'descricao', 'STRING');
        return retorno;
    };
    FaturamentoPadraoGridComponent.prototype.getReportList = function () {
        return [];
    };
    FaturamentoPadraoGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-faturamentopadrao-grid',
            template: __webpack_require__(/*! ./faturamentopadrao-grid.component.html */ "./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_faturamentopadrao_service__WEBPACK_IMPORTED_MODULE_4__["FaturamentoPadraoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FaturamentoPadraoGridComponent);
    return FaturamentoPadraoGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_3__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao.module.ts ***!
  \*************************************************************************/
/*! exports provided: FaturamentoPadraoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaturamentoPadraoModule", function() { return FaturamentoPadraoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faturamentopadrao_grid_faturamentopadrao_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faturamentopadrao-grid/faturamentopadrao-grid.component */ "./src/app/entidades/faturamentopadrao/faturamentopadrao-grid/faturamentopadrao-grid.component.ts");
/* harmony import */ var _faturamentopadrao_form_faturamentopadrao_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faturamentopadrao-form/faturamentopadrao-form.component */ "./src/app/entidades/faturamentopadrao/faturamentopadrao-form/faturamentopadrao-form.component.ts");
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
        component: _faturamentopadrao_grid_faturamentopadrao_grid_component__WEBPACK_IMPORTED_MODULE_1__["FaturamentoPadraoGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _faturamentopadrao_form_faturamentopadrao_form_component__WEBPACK_IMPORTED_MODULE_2__["FaturamentoPadraoFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var FaturamentoPadraoModule = /** @class */ (function () {
    function FaturamentoPadraoModule() {
    }
    FaturamentoPadraoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _faturamentopadrao_grid_faturamentopadrao_grid_component__WEBPACK_IMPORTED_MODULE_1__["FaturamentoPadraoGridComponent"],
                _faturamentopadrao_form_faturamentopadrao_form_component__WEBPACK_IMPORTED_MODULE_2__["FaturamentoPadraoFormComponent"],
            ],
            entryComponents: [_faturamentopadrao_grid_faturamentopadrao_grid_component__WEBPACK_IMPORTED_MODULE_1__["FaturamentoPadraoGridComponent"], _faturamentopadrao_form_faturamentopadrao_form_component__WEBPACK_IMPORTED_MODULE_2__["FaturamentoPadraoFormComponent"]],
            schemas: [],
            providers: []
        })
    ], FaturamentoPadraoModule);
    return FaturamentoPadraoModule;
}());



/***/ }),

/***/ "./src/app/entidades/faturamentopadrao/faturamentopadrao.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entidades/faturamentopadrao/faturamentopadrao.service.ts ***!
  \**************************************************************************/
/*! exports provided: FaturamentoPadraoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaturamentoPadraoService", function() { return FaturamentoPadraoService; });
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


var FaturamentoPadraoService = /** @class */ (function (_super) {
    __extends(FaturamentoPadraoService, _super);
    function FaturamentoPadraoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaturamentoPadraoService.prototype.getPathModule = function () {
        return 'faturamentopadrao';
    };
    FaturamentoPadraoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], FaturamentoPadraoService);
    return FaturamentoPadraoService;
}(_commons_service__WEBPACK_IMPORTED_MODULE_0__["CommonsService"]));



/***/ })

}]);
//# sourceMappingURL=entidades-faturamentopadrao-faturamentopadrao-module.js.map