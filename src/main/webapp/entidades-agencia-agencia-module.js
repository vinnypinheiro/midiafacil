(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entidades-agencia-agencia-module"],{

/***/ "./src/app/entidades/agencia/agencia-form/agencia-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/entidades/agencia/agencia-form/agencia-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n      <div class=\"col-lg-12\"> \n          <h2>Agencia</h2> \n\n          <ol class=\"breadcrumb\"> \n              <li> \n                  <a routerLink=\"/\">Início</a> \n              </li> \n\n              <li> \n                  <a routerLink=\"/agencia\">Agencia</a> \n              </li> \n\n              <li class=\"active\"> \n                   <strong>{{activeBean.id}}</strong> \n              </li> \n          </ol> \n\n      </div> \n\n      </div> \n\n        <!--TOOLBAR--> \n<div class=\"row\"> \n  <div class=\"mail-box-header l3-toolbar\" [class.sticky]=\"stickyMenu\" #stickyBar> \n \n    <div class=\"btn-group\"> \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" (click)=\"enableEdit()\" \n                [disabled]=\"operation === Operation.CREATE || operation === Operation.UPDATE\"> \n        <i class=\"fas fa-pencil-alt\"></i> Editar</button> \n \n \n      <button class=\"btn btn-primary\" \n        type=\"button\" \n        (click)=\"delete('este imóvel')\"> \n        <i class=\"fas fa-eraser\"></i> Apagar</button> \n \n      <button class=\"btn btn-primary\"  \n         (click)=\"this.save()\"  \n         type=\"button\" \n        [disabled]=\"operation !== Operation.CREATE && operation !== Operation.UPDATE\"> \n         <i class=\"fas fa-save\"></i> Salvar</button> \n    </div> \n \n    <div class=\"btn-group\"> \n \n      <div class=\"dropdown report-dropdown \"> \n \n        <button aria-expanded=\"true\" \n        class=\"dropdown-toggle btn btn-primary\" \n        data-toggle=\"dropdown\" href=\"#\"><i class=\"fas fa-external-link-square-alt\"></i>Atalhos \n                </button> \n \n        <ul class=\"dropdown-menu user-box  animated row\"> \n          <a><li>Açao 1</li></a> \n          <a><li>Açao 2</li></a> \n          <a><li>Açao 3</li></a> \n        </ul> \n \n      </div> \n    </div> \n \n    <div class=\"btn-group\"> \n      <div class=\"input-group\"> \n        <button class=\"btn btn-primary\"><i class=\"fa fa-print m-r-xs\"></i> Imprimir</button> \n \n        <div class=\"input-group-append\"> \n          <div class=\"dropdown report-dropdown\"> \n            <button aria-expanded=\"true\" class=\"dropdown-toggle btn btn-primary\" data-toggle=\"dropdown\" href=\"#\"> \n              <span></span> \n            </button> \n \n            <ul class=\"dropdown-menu user-box  animated row\"> \n              <a><li>Relatorio 1</li></a> \n              <a><li>Relatorio 2</li></a> \n              <a><li>Relatorio 3</li></a> \n            </ul> \n          </div> \n        </div> \n      </div> \n    </div> \n \n    <button class=\"btn btn-primary pull-right\" \n        type=\"button\" \n        (click)=\"openGrid()\"> \n      <i class=\"fas fa-times-circle\"></i> Fechar</button> \n \n  </div> \n  </div> \n<!--**************************************************************************************************************--> \n<div class=\"ibox-content l3-form\"> \n      <div  class=\"form-horizontal row\"> \n         <!--CAMPO BAIRRO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">bairro</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.bairro\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO BANCO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">banco</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.banco\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO BANCOAGENCIA--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">bancoagencia</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.bancoagencia\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO BANCOCONTA--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">bancoconta</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.bancoconta\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO CIDADE--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">cidade</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.cidade\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO CNPJ--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">cnpj</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.cnpj\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO CONTATO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">contato</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.contato\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO CPF--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">cpf</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.cpf\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO DATACADASTRO--> \n         <div class='form-group col-sm-4' \n>             <label class=\"col-sm-2 control-label\">datacadastro</label> \n             <div class=\"col-sm-10\"> \n                 <div class=\"input-group date\"> \n                     <input type=\"text\" \n                            class=\"form-control input-sm\" \n                            name=\"datacadastro\" \n                            [ngModel]=\"activeBean.datacadastro |date:'dd/MM/yyyy'\" \n                            [readonly]=\"operation==Operation.SELECT\"/> \n                     <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span> \n                 </div> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO EMAIL--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">email</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.email\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO EMAIL1--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">email1</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.email1\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO EMAIL2--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">email2</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.email2\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO EMAILCONTATO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">emailcontato</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.emailcontato\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO ENDERECO--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">endereco</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.endereco\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO FAX--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">fax</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.fax\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO INSCRICAOESTADUAL--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">inscricaoestadual</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.inscricaoestadual\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO INSCRICAOMUNICIPAL--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">inscricaomunicipal</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.inscricaomunicipal\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO NOMEFANTASIA--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">nomefantasia</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.nomefantasia\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO OBS--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">obs</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.obs\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO RAZAOSOCIAL--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">razaosocial</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.razaosocial\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO SITE--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">site</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.site\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO TELEFONE--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">telefone</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.telefone\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO TELEFONE2--> \n         <div class=\"form-group col-sm-4\">\n             <label class=\"col-sm-2 control-label\">telefone2</label> \n             <div class=\"col-sm-10\"> \n                 <input type=\"text\"  \n                     [readonly]=\"operation==Operation.SELECT\"\n                     [(ngModel)]=\"activeBean.telefone2\"\n                     class=\"form-control \"/> \n             </div> \n         </div> \n         <!--**************************************************************************************************************--> \n         <!--CAMPO UF_ID--> \n         <div class=\"col-sm-6\"> \n             <label class=\"col-sm-2 control-label\">uf_id</label> \n             <div class=\"col-sm-10\"> \n                 <gov-lookup-field class=\"form-control input-sm\" name=\"uf_id\" \n                                   [(ngModel)]=\"activeBean.uf_id_id\" \n                                   [code]=\"activeBean.uf_id_codigo\" \n                                   [description]=\"activeBean.uf_id_nome\" \n                                   [readonly]=\"operation==Operation.SELECT\" \n                                   (lookupCodeChange)=\"onLookupCodeChange($event)\">Selecione o item uf_id \n                 </gov-lookup-field>\n             </div>\n         </div>\n\n         <!--**************************************************************************************************************--> \n      </div> \n</div>\n\n"

/***/ }),

/***/ "./src/app/entidades/agencia/agencia-form/agencia-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entidades/agencia/agencia-form/agencia-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: AgenciaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaFormComponent", function() { return AgenciaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commons_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons-form */ "./src/app/commons-form.ts");
/* harmony import */ var _agencia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agencia.service */ "./src/app/entidades/agencia/agencia.service.ts");
/* harmony import */ var _uf_uf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../uf/uf.service */ "./src/app/entidades/uf/uf.service.ts");
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





var AgenciaFormComponent = /** @class */ (function (_super) {
    __extends(AgenciaFormComponent, _super);
    function AgenciaFormComponent(apiService, ufService, route, router) {
        var _this = _super.call(this, apiService, route, router) || this;
        _this.ufService = ufService;
        return _this;
    }
    AgenciaFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    AgenciaFormComponent.prototype.getLookupService = function (lookupName) {
        switch (lookupName) {
            case 'uf': {
                return this.ufService;
            }
            default: {
                console.log('serviço não disponibilizado para ', lookupName);
                return this.apiService;
            }
        }
    };
    AgenciaFormComponent.prototype.getDeLookupFilter = function (lookupValue) {
        switch (lookupValue.name) {
            case 'uf': {
                return this.buildLookupFilter('uf');
            }
            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name);
            }
        }
        return null;
    };
    AgenciaFormComponent.prototype.onButtonActionClick = function () {
        //console.log(this.activeBean.agencia.id); 
    };
    AgenciaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-agencia-form',
            template: __webpack_require__(/*! ./agencia-form.component.html */ "./src/app/entidades/agencia/agencia-form/agencia-form.component.html"),
        }),
        __metadata("design:paramtypes", [_agencia_service__WEBPACK_IMPORTED_MODULE_3__["AgenciaService"],
            _uf_uf_service__WEBPACK_IMPORTED_MODULE_4__["UfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AgenciaFormComponent);
    return AgenciaFormComponent;
}(_commons_form__WEBPACK_IMPORTED_MODULE_2__["CommonsForm"]));



/***/ }),

/***/ "./src/app/entidades/agencia/agencia-grid/agencia-grid.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/entidades/agencia/agencia-grid/agencia-grid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--BARRA SUPERIOR--> \n<div class=\"row wrapper border-bottom white-bg page-heading\"> \n     <div class=\"col-lg-12\"> \n         <h2> <i class=\"fa fa-sign-in-alt\"></i> Agencia </h2> \n\n         <ol class=\"breadcrumb\"> \n             <li> \n                 <a routerLink=\"/\">Início</a> \n             </li> \n\n             <li class=\"active\"> \n               <strong>Agencia</strong> \n             </li>\n         </ol> \n     </div> \n\n</div> \n\n<!--**************************************************************************************************************--> \n\n<div class=\"row\"> \n   <gov-tool-bar (buttonActionClick)=\"onButtonActionClick($event)\" (filterRowValueChange)=\"onFilterValueChange($event)\"></gov-tool-bar> \n    <gov-filter [grid]=this></gov-filter> \n</div> \n<div class=\"ibox-content l3-grid\"> \n     <div class=\"row\"> \n         <div class=\"table-responsive\"> \n             <table class=\"table table-striped table-bordered \"> \n                 <thead> \n                     <tr> \n                         <th style=\"width: 2%\"> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </th> \n                         <th style=\"width: auto\">bairro</th> \n                         <th style=\"width: auto\">banco</th> \n                         <th style=\"width: auto\">bancoagencia</th> \n                         <th style=\"width: auto\">bancoconta</th> \n                         <th style=\"width: auto\">cidade</th> \n                         <th style=\"width: auto\">cnpj</th> \n                         <th style=\"width: auto\">contato</th> \n                         <th style=\"width: auto\">cpf</th> \n                         <th style=\"width: auto\">datacadastro</th> \n                         <th style=\"width: auto\">email</th> \n                         <th style=\"width: auto\">email1</th> \n                         <th style=\"width: auto\">email2</th> \n                         <th style=\"width: auto\">emailcontato</th> \n                         <th style=\"width: auto\">endereco</th> \n                         <th style=\"width: auto\">fax</th> \n                         <th style=\"width: auto\">inscricaoestadual</th> \n                         <th style=\"width: auto\">inscricaomunicipal</th> \n                         <th style=\"width: auto\">nomefantasia</th> \n                         <th style=\"width: auto\">obs</th> \n                         <th style=\"width: auto\">razaosocial</th> \n                         <th style=\"width: auto\">site</th> \n                         <th style=\"width: auto\">telefone</th> \n                         <th style=\"width: auto\">telefone2</th> \n                         <th style=\"width: auto\">uf_id</th> \n                     </tr> \n                 </thead> \n\n                 <tbody> \n                     <tr *ngFor=\"let row of dataList\"> \n                         <td> \n                             <label class=\"l3-checkbox\"> \n                                 <input type=\"checkbox\" \n                                         [checked]=\"activeBean && (activeBean.id === row.id)\" \n                                         (change)=\"onSelectionChange($event.target.checked, row)\"> \n                                 <span class=\"checkmark\"></span> \n                             </label> \n                         </td> \n                     <td>{{row.bairro}}</td> \n                     <td>{{row.banco}}</td> \n                     <td>{{row.bancoagencia}}</td> \n                     <td>{{row.bancoconta}}</td> \n                     <td>{{row.cidade}}</td> \n                     <td>{{row.cnpj}}</td> \n                     <td>{{row.contato}}</td> \n                     <td>{{row.cpf}}</td> \n                     <td>{{row.datacadastro}}</td> \n                     <td>{{row.email}}</td> \n                     <td>{{row.email1}}</td> \n                     <td>{{row.email2}}</td> \n                     <td>{{row.emailcontato}}</td> \n                     <td>{{row.endereco}}</td> \n                     <td>{{row.fax}}</td> \n                     <td>{{row.inscricaoestadual}}</td> \n                     <td>{{row.inscricaomunicipal}}</td> \n                     <td>{{row.nomefantasia}}</td> \n                     <td>{{row.obs}}</td> \n                     <td>{{row.razaosocial}}</td> \n                     <td>{{row.site}}</td> \n                     <td>{{row.telefone}}</td> \n                     <td>{{row.telefone2}}</td> \n                     <td>{{row.uf_id_nome }}</td> \n                     </tr> \n                 </tbody> \n             </table> \n\n         </div> \n     </div> \n</div> \n"

/***/ }),

/***/ "./src/app/entidades/agencia/agencia-grid/agencia-grid.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entidades/agencia/agencia-grid/agencia-grid.component.ts ***!
  \**************************************************************************/
/*! exports provided: AgenciaGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaGridComponent", function() { return AgenciaGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _commons_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons-grid */ "./src/app/commons-grid.ts");
/* harmony import */ var _agencia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agencia.service */ "./src/app/entidades/agencia/agencia.service.ts");
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





var AgenciaGridComponent = /** @class */ (function (_super) {
    __extends(AgenciaGridComponent, _super);
    function AgenciaGridComponent(apiService, router) {
        return _super.call(this, apiService, router) || this;
    }
    AgenciaGridComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    AgenciaGridComponent.prototype.onNavigateClick = function (filterData) {
        this.loadByFilter(filterData);
    };
    AgenciaGridComponent.prototype.getDefaultFilter = function () {
        var filterData = _super.prototype.getDefaultFilter.call(this);
        filterData.order = 'agencia.bairro, agencia.banco, agencia.bancoagencia, agencia.bancoconta, agencia.cidade, agencia.cnpj, agencia.contato, agencia.cpf, agencia.datacadastro, agencia.email, agencia.email1, agencia.email2, agencia.emailcontato, agencia.endereco, agencia.fax, agencia.inscricaoestadual, agencia.inscricaomunicipal, agencia.nomefantasia, agencia.obs, agencia.razaosocial, agencia.site, agencia.telefone, agencia.telefone2 ';
        return filterData;
    };
    AgenciaGridComponent.prototype.getRowFilter = function () {
        var filter = this.buildRowFilter('trb_agencia');
        filter.whereClauses[0].dataType = 'INTEGER';
        return filter;
    };
    AgenciaGridComponent.prototype.getTableName = function () {
        return 'agencia';
    };
    AgenciaGridComponent.prototype.getFieldList = function () {
        var retorno = [];
        retorno[0] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('bairro', 'bairro', 'STRING');
        retorno[1] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('banco', 'banco', 'STRING');
        retorno[2] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('bancoagencia', 'bancoagencia', 'STRING');
        retorno[3] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('bancoconta', 'bancoconta', 'STRING');
        retorno[4] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('cidade', 'cidade', 'STRING');
        retorno[5] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('cnpj', 'cnpj', 'STRING');
        retorno[6] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('contato', 'contato', 'STRING');
        retorno[7] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('cpf', 'cpf', 'STRING');
        retorno[8] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('datacadastro', 'datacadastro', 'DATE');
        retorno[9] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('email', 'email', 'STRING');
        retorno[10] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('email1', 'email1', 'STRING');
        retorno[11] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('email2', 'email2', 'STRING');
        retorno[12] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('emailcontato', 'emailcontato', 'STRING');
        retorno[13] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('endereco', 'endereco', 'STRING');
        retorno[14] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('fax', 'fax', 'STRING');
        retorno[15] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('inscricaoestadual', 'inscricaoestadual', 'STRING');
        retorno[16] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('inscricaomunicipal', 'inscricaomunicipal', 'STRING');
        retorno[17] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('nomefantasia', 'nomefantasia', 'STRING');
        retorno[18] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('obs', 'obs', 'STRING');
        retorno[19] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('razaosocial', 'razaosocial', 'STRING');
        retorno[20] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('site', 'site', 'STRING');
        retorno[21] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('telefone', 'telefone', 'STRING');
        retorno[22] = new _utils_utils__WEBPACK_IMPORTED_MODULE_2__["FieldSearch"]('telefone2', 'telefone2', 'STRING');
        return retorno;
    };
    AgenciaGridComponent.prototype.getReportList = function () {
        return [];
    };
    AgenciaGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gov-agencia-grid',
            template: __webpack_require__(/*! ./agencia-grid.component.html */ "./src/app/entidades/agencia/agencia-grid/agencia-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_agencia_service__WEBPACK_IMPORTED_MODULE_4__["AgenciaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AgenciaGridComponent);
    return AgenciaGridComponent;
}(_commons_grid__WEBPACK_IMPORTED_MODULE_3__["CommonsGrid"]));



/***/ }),

/***/ "./src/app/entidades/agencia/agencia.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/entidades/agencia/agencia.module.ts ***!
  \*****************************************************/
/*! exports provided: AgenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaModule", function() { return AgenciaModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agencia_grid_agencia_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agencia-grid/agencia-grid.component */ "./src/app/entidades/agencia/agencia-grid/agencia-grid.component.ts");
/* harmony import */ var _agencia_form_agencia_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agencia-form/agencia-form.component */ "./src/app/entidades/agencia/agencia-form/agencia-form.component.ts");
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
        component: _agencia_grid_agencia_grid_component__WEBPACK_IMPORTED_MODULE_1__["AgenciaGridComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _agencia_form_agencia_form_component__WEBPACK_IMPORTED_MODULE_2__["AgenciaFormComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var AgenciaModule = /** @class */ (function () {
    function AgenciaModule() {
    }
    AgenciaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _agencia_grid_agencia_grid_component__WEBPACK_IMPORTED_MODULE_1__["AgenciaGridComponent"],
                _agencia_form_agencia_form_component__WEBPACK_IMPORTED_MODULE_2__["AgenciaFormComponent"],
            ],
            entryComponents: [_agencia_grid_agencia_grid_component__WEBPACK_IMPORTED_MODULE_1__["AgenciaGridComponent"], _agencia_form_agencia_form_component__WEBPACK_IMPORTED_MODULE_2__["AgenciaFormComponent"]],
            schemas: [],
            providers: []
        })
    ], AgenciaModule);
    return AgenciaModule;
}());



/***/ })

}]);
//# sourceMappingURL=entidades-agencia-agencia-module.js.map