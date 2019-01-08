(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-uf-uf-module"],{

/***/ "./src/app/entidades/uf/uf-form/uf-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/entidades/uf/uf-form/uf-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>Uf</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/uf\">Uf</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO NOME--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">nome</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.nome\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO PAIS_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">pais_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"pais_id\" \n                                   [(ngModel)]=\"activeBean.pais_id_id\" \n                                   [code]=\"activeBean.pais_id_codigo\" \n                                   [description]=\"activeBean.pais_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item pais_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/uf/uf-form/uf-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/entidades/uf/uf-form/uf-form.component.ts ***!
  \***********************************************************/
/*! exports provided: UfFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UfFormComponent", function() { return UfFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _uf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uf.service */ "./src/app/entidades/uf/uf.service.ts");
/* harmony import */ var _pais_pais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pais/pais.service */ "./src/app/entidades/pais/pais.service.ts");
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





var UfFormComponent = /** @class */ (function (_super) {
    __extends(UfFormComponent, _super);
    function UfFormComponent(apiService, paisService, route, router) {
        var _this = _super.call(this, apiService, route, router) || this;
        _this.paisService = paisService;
        return _this;
    }
    UfFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    UfFormComponent.prototype.getLookupService = function (lookupName) {
        switch (lookupName) {
            case 'pais': {
                return this.paisService;
            }
            default: {
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    UfFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
        switch (lookupValue.name) {
            case 'pais': {
                return this.buildLookupFilter('pais');
            }
            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    UfFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.uf.id); 
    };
    UfFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-uf-form',
            template: __webpack_require__(/*! ./uf-form.component.html */ "./src/app/entidades/uf/uf-form/uf-form.component.html"),
        }),
        __metadata("design:paramtypes", [_uf_service__WEBPACK_IMPORTED_MODULE_3__["UfService"],
            _pais_pais_service__WEBPACK_IMPORTED_MODULE_4__["PaisService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UfFormComponent);
    return UfFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/uf/uf-grid/uf-grid.component.html":
/*!*************************************************************!*\
  !*** ./src/app/entidades/uf/uf-grid/uf-grid.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> Uf </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>Uf</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************************************************************--> \n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">nome</th> \n                         <th style=\"width: auto\">pais_id</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.nome}}</td> \n                     <td>{{row.pais_id_nome }}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/uf/uf-grid/uf-grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/entidades/uf/uf-grid/uf-grid.component.ts ***!
  \***********************************************************/
/*! exports provided: UfGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UfGridComponent", function() { return UfGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _uf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uf.service */ "./src/app/entidades/uf/uf.service.ts");
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





var UfGridComponent = /** @class */ (function (_super) {
    __extends(UfGridComponent, _super);
    function UfGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    UfGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    UfGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    UfGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = 'uf.nome ';
        return filterData;
    };
    UfGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_uf');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    UfGridComponent.prototype.getTableName = function () {
        return 'uf';
    };
    UfGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        retorno[0] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('nome', 'nome', 'STRING');
        return retorno;
    };
    UfGridComponent.prototype.getReportList = function () {
        return [];
    };
    UfGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-uf-grid',
            template: __webpack_require__(/*! ./uf-grid.component.html */ "./src/app/entidades/uf/uf-grid/uf-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_uf_service__WEBPACK_IMPORTED_MODULE_4__["UfService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UfGridComponent);
    return UfGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_3__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/uf/uf.module.ts":
/*!*******************************************!*\
  !*** ./src/app/entidades/uf/uf.module.ts ***!
  \*******************************************/
/*! exports provided: UfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UfModule", function() { return UfModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uf_grid_uf_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uf-grid/uf-grid.component */ "./src/app/entidades/uf/uf-grid/uf-grid.component.ts");
/* harmony import */ var _uf_form_uf_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uf-form/uf-form.component */ "./src/app/entidades/uf/uf-form/uf-form.component.ts");
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
        component: _uf_grid_uf_grid_component__WEBPACK_IMPORTED_MODULE_1__["UfGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _uf_form_uf_form_component__WEBPACK_IMPORTED_MODULE_2__["UfFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var UfModule = /** @class */ (function () {
    function UfModule() {
    }
    UfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _uf_grid_uf_grid_component__WEBPACK_IMPORTED_MODULE_1__["UfGridComponent"],
                _uf_form_uf_form_component__WEBPACK_IMPORTED_MODULE_2__["UfFormComponent"],
            ],
            entryComponents: [_uf_grid_uf_grid_component__WEBPACK_IMPORTED_MODULE_1__["UfGridComponent"], _uf_form_uf_form_component__WEBPACK_IMPORTED_MODULE_2__["UfFormComponent"]],
            schemas: [],
            providers: []
        })
    ], UfModule);
    return UfModule;
}());



/***/ })

}]);
//# sourceMappingURL=entidades-uf-uf-module.js.map