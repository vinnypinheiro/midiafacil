(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-tipoproduto-tipoproduto-module"],{

/***/ "./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>TipoProduto</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/tipoproduto\">TipoProduto</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO NOME--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">nome</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.nome\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TipoProdutoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProdutoFormComponent", function() { return TipoProdutoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _tipoproduto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipoproduto.service */ "./src/app/entidades/tipoproduto/tipoproduto.service.ts");
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




var TipoProdutoFormComponent = /** @class */ (function (_super) {
    __extends(TipoProdutoFormComponent, _super);
    function TipoProdutoFormComponent(apiService, route, router) {
        return _super.call(this, apiService, route, router) || this;
    }
    TipoProdutoFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    TipoProdutoFormComponent.prototype.getLookupService = function (lookupName) {
        switch (lookupName) {
            default: {
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    TipoProdutoFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
        switch (lookupValue.name) {
            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    TipoProdutoFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.tipoproduto.id); 
    };
    TipoProdutoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-tipoproduto-form',
            template: __webpack_require__(/*! ./tipoproduto-form.component.html */ "./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.html"),
        }),
        __metadata("design:paramtypes", [_tipoproduto_service__WEBPACK_IMPORTED_MODULE_3__["TipoProdutoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TipoProdutoFormComponent);
    return TipoProdutoFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> TipoProduto </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>TipoProduto</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************************************************************--> \n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">nome</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.nome}}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TipoProdutoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProdutoGridComponent", function() { return TipoProdutoGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _tipoproduto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipoproduto.service */ "./src/app/entidades/tipoproduto/tipoproduto.service.ts");
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




var TipoProdutoGridComponent = /** @class */ (function (_super) {
    __extends(TipoProdutoGridComponent, _super);
    function TipoProdutoGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    TipoProdutoGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    TipoProdutoGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    TipoProdutoGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = ' ';
        return filterData;
    };
    TipoProdutoGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_tipoproduto');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    TipoProdutoGridComponent.prototype.getTableName = function () {
        return 'tipoproduto';
    };
    TipoProdutoGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        return retorno;
    };
    TipoProdutoGridComponent.prototype.getReportList = function () {
        return [];
    };
    TipoProdutoGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-tipoproduto-grid',
            template: __webpack_require__(/*! ./tipoproduto-grid.component.html */ "./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_tipoproduto_service__WEBPACK_IMPORTED_MODULE_3__["TipoProdutoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TipoProdutoGridComponent);
    return TipoProdutoGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_2__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/tipoproduto/tipoproduto.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/entidades/tipoproduto/tipoproduto.module.ts ***!
  \*************************************************************/
/*! exports provided: TipoProdutoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProdutoModule", function() { return TipoProdutoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tipoproduto_grid_tipoproduto_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipoproduto-grid/tipoproduto-grid.component */ "./src/app/entidades/tipoproduto/tipoproduto-grid/tipoproduto-grid.component.ts");
/* harmony import */ var _tipoproduto_form_tipoproduto_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipoproduto-form/tipoproduto-form.component */ "./src/app/entidades/tipoproduto/tipoproduto-form/tipoproduto-form.component.ts");
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
        component: _tipoproduto_grid_tipoproduto_grid_component__WEBPACK_IMPORTED_MODULE_1__["TipoProdutoGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _tipoproduto_form_tipoproduto_form_component__WEBPACK_IMPORTED_MODULE_2__["TipoProdutoFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var TipoProdutoModule = /** @class */ (function () {
    function TipoProdutoModule() {
    }
    TipoProdutoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _tipoproduto_grid_tipoproduto_grid_component__WEBPACK_IMPORTED_MODULE_1__["TipoProdutoGridComponent"],
                _tipoproduto_form_tipoproduto_form_component__WEBPACK_IMPORTED_MODULE_2__["TipoProdutoFormComponent"],
            ],
            entryComponents: [_tipoproduto_grid_tipoproduto_grid_component__WEBPACK_IMPORTED_MODULE_1__["TipoProdutoGridComponent"], _tipoproduto_form_tipoproduto_form_component__WEBPACK_IMPORTED_MODULE_2__["TipoProdutoFormComponent"]],
            schemas: [],
            providers: []
        })
    ], TipoProdutoModule);
    return TipoProdutoModule;
}());



/***/ })

}]);
//# sourceMappingURL=entidades-tipoproduto-tipoproduto-module.js.map