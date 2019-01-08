(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~entidades-agencia-agencia-module~entidades-campanha-campanha-module~entidades-cliente-client~29db4f29"],{

/***/ "./node_modules/json-stringify-safe/stringify.js":
/*!*******************************************************!*\
  !*** ./node_modules/json-stringify-safe/stringify.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),

/***/ "./src/app/commons-form.ts":
/*!*********************************!*\
  !*** ./src/app/commons-form.ts ***!
  \*********************************/
/*! exports provided: CommonsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsForm", function() { return CommonsForm; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonsForm = /** @class */ (function () {
    function CommonsForm(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.Operation = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Operation"];
        this.activeBean = {};
        this.lookupFilters = {};
        this.stickyMenu = false;
    }
    CommonsForm.prototype.ngOnInit = function () {
        var _this = this;
        this.beanSubscribe = this.route.params.subscribe(function (params) {
            _this.beanId = params['id'];
            if (_this.beanId === "novo") {
                _this.beanId = "";
                _this.operation = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Operation"].CREATE;
            }
            else {
                _this.operation = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Operation"].SELECT;
                _this.apiService.findById(_this.beanId).subscribe(function (response) {
                    _this.activeBean = response;
                });
            }
        });
        this.iCheckGreenLoad();
        this.ControlCollapse();
    };
    CommonsForm.prototype.save = function () {
        var _this = this;
        this.apiService.save(this.activeBean).subscribe(function (response) {
            console.log(response);
            _this.openGrid();
        });
    };
    CommonsForm.prototype.ngAfterViewInit = function () {
    };
    CommonsForm.prototype.onLookupCodeChange = function (value) {
        if (!this.lookupFilters[value.name]) {
            this.lookupFilters[value.name] = this.getDeLookupFilter(value);
        }
        var filter = this.lookupFilters[value.name];
        filter.page = value.page;
        for (var _i = 0, _a = filter.whereClauses; _i < _a.length; _i++) {
            var whereClause = _a[_i];
            whereClause.iniValue = value.code;
        }
        this.getLookupService(value.name).loadQuery(filter, value.name + "Lkp").subscribe(function (response) {
            value.lookup.evaluateQueryReturn(response.content, response.filterData.page, response.filterData.totalPages);
        });
    };
    CommonsForm.prototype.getDefaultFilter = function () {
        return {
            page: 1,
            limit: 300,
            whereClauses: []
        };
    };
    CommonsForm.prototype.buildFilter = function (param) {
        var filter = this.getDefaultFilter();
        filter.page = 1;
        filter.limit = param.limit ? param.limit : 300;
        filter.order = param.order ? param.order : undefined;
        for (var _i = 0, _a = param.whereClauses; _i < _a.length; _i++) {
            var whereClause = _a[_i];
            filter.whereClauses.push(whereClause);
        }
        return filter;
    };
    CommonsForm.prototype.buildLookupFilter = function (tableName) {
        var filter = this.getDefaultFilter();
        filter.limit = 10;
        filter.order = tableName + ".nome";
        filter.whereClauses.push({
            table: tableName, name: filter.codigoField == undefined ? 'codigo' : filter.codigoField, dataType: 'STRING', matchType: 'LIKE'
        });
        filter.whereClauses.push({
            table: tableName, name: filter.nomeField == undefined ? 'nome' : filter.nomeField, dataType: 'STRING', matchType: 'LIKE', whereType: 'OR'
        });
        return filter;
    };
    CommonsForm.prototype.ControlCollapse = function () {
        // Collapse ibox function
        $('.collapse-link').on('click', function (e) {
            e.preventDefault();
            var ibox = $(this).closest('div.ibox');
            var button = $(this).find('i');
            var content = ibox.children('.ibox-content');
            content.slideToggle(200);
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            ibox.toggleClass('').toggleClass('border-bottom');
            setTimeout(function () {
                ibox.resize();
                ibox.find('[id^=map-]').resize();
            }, 50);
        });
        // Close ibox function
        $('.close-link').on('click', function (e) {
            e.preventDefault();
            var content = $(this).closest('div.ibox');
            content.remove();
        });
        // Fullscreen ibox function
        $('.fullscreen-link').on('click', function (e) {
            e.preventDefault();
            var ibox = $(this).closest('div.ibox');
            var button = $(this).find('i');
            $('body').toggleClass('fullscreen-ibox-mode');
            button.toggleClass('fa-expand').toggleClass('fa-compress');
            ibox.toggleClass('fullscreen');
            setTimeout(function () {
                $(window).trigger('resize');
            }, 100);
        });
    };
    CommonsForm.prototype.handleScroll = function () {
        var windowScroll = window.pageYOffset;
        if (windowScroll >= 150) {
            this.stickyMenu = true;
        }
        else {
            this.stickyMenu = false;
        }
    };
    CommonsForm.prototype.enableEdit = function () {
        if (this.canEdit()) {
            this.operation = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Operation"].UPDATE;
        }
        else {
            alert("Não autorizado.");
        }
    };
    CommonsForm.prototype.delete = function (beanName) {
        var _this = this;
        if (this.canDelete()) {
            if (confirm("Tem certeza que quer deletar " + beanName + " ?")) {
                this.apiService.delete(this.activeBean.id).subscribe(function (response) {
                    _this.openGrid();
                });
            }
        }
        else {
            alert("Não autorizado.");
        }
    };
    CommonsForm.prototype.canEdit = function () {
        return true;
    };
    CommonsForm.prototype.canDelete = function () {
        return true;
    };
    CommonsForm.prototype.openGrid = function () {
        this.router.navigateByUrl("/" + this.apiService.getPathModule());
    };
    CommonsForm.prototype.saveItems = function () {
    };
    CommonsForm.prototype.loadItems = function () {
    };
    CommonsForm.prototype.iCheckGreenLoad = function () {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommonsForm.prototype, "handleScroll", null);
    return CommonsForm;
}());



/***/ }),

/***/ "./src/app/commons-service.ts":
/*!************************************!*\
  !*** ./src/app/commons-service.ts ***!
  \************************************/
/*! exports provided: ServerResponse, CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerResponse", function() { return ServerResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var json_stringify_safe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");
/* harmony import */ var json_stringify_safe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_stringify_safe__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServerResponse = /** @class */ (function () {
    function ServerResponse() {
    }
    return ServerResponse;
}());

var CommonsService = /** @class */ (function () {
    function CommonsService(http) {
        this.http = http;
        this.API_ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getBaseURL();
        this.reportName = "";
    }
    CommonsService.prototype.loadByFilter = function (filterData) {
        return this.http.post(this.API_ROOT_URL + "/" + this.getPathModule() + "/", filterData);
    };
    CommonsService.prototype.save = function (bean) {
        console.log(bean);
        return this.http.post(this.API_ROOT_URL + "/" + this.getPathModule() + "/save", JSON.parse(json_stringify_safe__WEBPACK_IMPORTED_MODULE_4__(bean)));
    };
    CommonsService.prototype.loadQuery = function (filterData, queryId) {
        return this.http.post(this.API_ROOT_URL + "/" + this.getPathModule() + "/q/" + queryId, filterData);
    };
    CommonsService.prototype.findById = function (id) {
        return this.http.get(this.API_ROOT_URL + "/" + this.getPathModule() + "/" + id);
    };
    CommonsService.prototype.delete = function (id) {
        return this.http.delete(this.API_ROOT_URL + "/" + this.getPathModule() + "/" + id);
    };
    CommonsService.prototype.hashCode = function (value) {
        var h = 0, l = value.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + value.charCodeAt(i++) | 0;
        return h;
    };
    ;
    CommonsService.prototype.printReport = function (reportName) {
        this.reportName = reportName;
        if (this.reportName !== null && this.reportName !== "") {
            this.downloadPDF().subscribe(function (res) {
                var fileURL = URL.createObjectURL(res);
                window.open(fileURL);
            });
        }
    };
    CommonsService.prototype.downloadPDF = function () {
        var filter = {
            page: 1,
            limit: 15,
            whereClauses: []
        };
        return this.http.post(this.API_ROOT_URL + '/reports/' + this.reportName, filter, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return new Blob([res], { type: 'application/pdf', });
        }));
    };
    CommonsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CommonsService);
    return CommonsService;
}());



/***/ }),

/***/ "./src/app/environments/environment.ts":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    getBaseURL: function () {
        // console.log('getBaseURL -> production', this.production);
        return 'http://localhost:8080';
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ })

}]);
//# sourceMappingURL=default~entidades-agencia-agencia-module~entidades-campanha-campanha-module~entidades-cliente-client~29db4f29.js.map