(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3/DG":function(l,n){function t(l,n){var t=[],u=[];return null==n&&(n=function(l,n){return t[0]===n?"[Circular ~]":"[Circular ~."+u.slice(0,t.indexOf(n)).join(".")+"]"}),function(e,o){if(t.length>0){var i=t.indexOf(this);~i?t.splice(i+1):t.push(this),~i?u.splice(i,1/0,e):u.push(e),~t.indexOf(o)&&(o=n.call(this,e,o))}else t.push(o);return null==l?o:l.call(this,e,o)}}(l.exports=function(l,n,u,e){return JSON.stringify(l,t(n,e),u)}).getSerialize=t},"7pRi":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var u=t("oCjk"),e=function(){function l(l,n,t){this.apiService=l,this.route=n,this.router=t,this.Operation=u.d,this.activeBean={},this.lookupFilters={},this.stickyMenu=!1}return l.prototype.ngOnInit=function(){var l=this;this.beanSubscribe=this.route.params.subscribe(function(n){l.beanId=n.id,"novo"===l.beanId?(l.beanId="",l.operation=u.d.CREATE):(l.operation=u.d.SELECT,l.apiService.findById(l.beanId).subscribe(function(n){l.activeBean=n}))}),this.iCheckGreenLoad(),this.ControlCollapse()},l.prototype.save=function(){var l=this;this.apiService.save(this.activeBean).subscribe(function(n){console.log(n),l.openGrid()})},l.prototype.ngAfterViewInit=function(){},l.prototype.onLookupCodeChange=function(l){this.lookupFilters[l.name]||(this.lookupFilters[l.name]=this.getDeLookupFilter(l));var n=this.lookupFilters[l.name];n.page=l.page;for(var t=0,u=n.whereClauses;t<u.length;t++)u[t].iniValue=l.code;this.getLookupService(l.name).loadQuery(n,l.name+"Lkp").subscribe(function(n){l.lookup.evaluateQueryReturn(n.content,n.filterData.page,n.filterData.totalPages)})},l.prototype.getDefaultFilter=function(){return{page:1,limit:300,whereClauses:[]}},l.prototype.buildFilter=function(l){var n=this.getDefaultFilter();n.page=1,n.limit=l.limit?l.limit:300,n.order=l.order?l.order:void 0;for(var t=0,u=l.whereClauses;t<u.length;t++)n.whereClauses.push(u[t]);return n},l.prototype.buildLookupFilter=function(l){var n=this.getDefaultFilter();return n.limit=10,n.order=l+".nome",n.whereClauses.push({table:l,name:null==n.codigoField?"codigo":n.codigoField,dataType:"STRING",matchType:"LIKE"}),n.whereClauses.push({table:l,name:null==n.nomeField?"nome":n.nomeField,dataType:"STRING",matchType:"LIKE",whereType:"OR"}),n},l.prototype.ControlCollapse=function(){$(".collapse-link").on("click",function(l){l.preventDefault();var n=$(this).closest("div.ibox"),t=$(this).find("i");n.children(".ibox-content").slideToggle(200),t.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),n.toggleClass("").toggleClass("border-bottom"),setTimeout(function(){n.resize(),n.find("[id^=map-]").resize()},50)}),$(".close-link").on("click",function(l){l.preventDefault(),$(this).closest("div.ibox").remove()}),$(".fullscreen-link").on("click",function(l){l.preventDefault();var n=$(this).closest("div.ibox"),t=$(this).find("i");$("body").toggleClass("fullscreen-ibox-mode"),t.toggleClass("fa-expand").toggleClass("fa-compress"),n.toggleClass("fullscreen"),setTimeout(function(){$(window).trigger("resize")},100)})},l.prototype.handleScroll=function(){var l=window.pageYOffset;this.stickyMenu=l>=150},l.prototype.enableEdit=function(){this.canEdit()?this.operation=u.d.UPDATE:alert("N\xe3o autorizado.")},l.prototype.delete=function(l){var n=this;this.canDelete()?confirm("Tem certeza que quer deletar "+l+" ?")&&this.apiService.delete(this.activeBean.id).subscribe(function(l){n.openGrid()}):alert("N\xe3o autorizado.")},l.prototype.canEdit=function(){return!0},l.prototype.canDelete=function(){return!0},l.prototype.openGrid=function(){this.router.navigateByUrl("/"+this.apiService.getPathModule())},l.prototype.saveItems=function(){},l.prototype.loadItems=function(){},l.prototype.iCheckGreenLoad=function(){$(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green"})},l}()},K03V:function(l,n,t){"use strict";t("CcnG");var u=function(){return function(){this.first=!1,this.prior=!1,this.next=!1,this.last=!1,this.locate=!1,this.open=!1,this.print=!1,this.new=!1,this.copy=!1,this.delete=!1,this.close=!0,this.filter=!1}}(),e=t("naTb");t.d(n,"a",function(){return o});var o=function(){function l(l,n){this.apiService=l,this.router=n,this.activeBean={},this.filterData={}}return l.prototype.getFilterData=function(){return this.filterData},l.prototype.ngOnInit=function(){this.toolBar.stateButons=new u,this.loadByFilter(this.getDefaultFilter())},l.prototype.loadByFilter=function(l){var n=this;this.apiService.loadByFilter(l).subscribe(function(l){n.activeBean=null})},l.prototype.onButtonActionClick=function(l){switch(l){case"first":this.filterData.page=1,this.loadByFilter(this.filterData);break;case"prior":--this.filterData.page,this.loadByFilter(this.filterData);break;case"next":++this.filterData.page,this.loadByFilter(this.filterData);break;case"last":this.filterData.page=this.filterData.totalPages,this.loadByFilter(this.filterData);break;case"open":this.router.navigateByUrl("/"+this.apiService.getPathModule()+"/"+this.activeBean.id);break;case"new":this.router.navigateByUrl("/"+this.apiService.getPathModule()+"/novo")}},l.prototype.onSelectionChange=function(l,n){this.activeBean=l?n:null,this.toolBar.stateButons.open=null!=this.activeBean,this.toolBar.stateButons.print=null!=this.activeBean,this.toolBar.stateButons.copy=null!=this.activeBean,this.toolBar.stateButons.delete=null!=this.activeBean,e.a.beanIdSelected=this.activeBean.id},l.prototype.onFilterValueChange=function(l){this.filterData=this.getRowFilter();for(var n=0,t=this.filterData.whereClauses;n<t.length;n++)t[n].iniValue=l;this.loadByFilter(this.filterData)},l.prototype.getDefaultFilter=function(){return{page:1,limit:300,whereClauses:[]}},l.prototype.buildRowFilter=function(l){var n=this.getDefaultFilter();return n.whereClauses.push({table:l,name:null==n.codigoField?"codigo":n.codigoField,dataType:"STRING",matchType:"LIKE"}),n.whereClauses.push({table:l,name:null==n.nomeField?"nome":n.nomeField,dataType:"STRING",matchType:"LIKE",whereType:"OR"}),n},l.prototype.getFieldList=function(){return[]},l.prototype.getTableName=function(){return"sem tabela"},l}()},MCP2:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),o=t("oCjk"),i=t("K03V"),a=t("fRS3"),r=t("t/Na"),s=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return Object(e.c)(n,l),n.prototype.getPathModule=function(){return"faturamentopadrao"},n.ngInjectableDef=u.W({factory:function(){return new n(u.ab(r.c))},token:n,providedIn:"root"}),n}(a.a),c=function(l){function n(n,t){return l.call(this,n,t)||this}return Object(e.c)(n,l),n.prototype.ngOnInit=function(){l.prototype.ngOnInit.call(this)},n.prototype.onNavigateClick=function(l){this.loadByFilter(l)},n.prototype.getDefaultFilter=function(){var n=l.prototype.getDefaultFilter.call(this);return n.order="faturamentopadrao.descricao ",n},n.prototype.getRowFilter=function(){var l=this.buildRowFilter("trb_faturamentopadrao");return l.whereClauses[0].dataType="INTEGER",l},n.prototype.getTableName=function(){return"faturamentopadrao"},n.prototype.getFieldList=function(){var l=[];return l[0]=new o.b("descricao","descricao","STRING"),l},n.prototype.getReportList=function(){return[]},n}(i.a),p=function(l){function n(n,t,u){return l.call(this,n,t,u)||this}return Object(e.c)(n,l),n.prototype.ngOnInit=function(){l.prototype.ngOnInit.call(this)},n.prototype.getLookupService=function(l){return console.log("servi\xe7o n\xe3o disponibilizado para ",l),this.apiService},n.prototype.getDeLookupFilter=function(l){return console.log("filtro n\xe3o disponibilizado para ",l.name),null},n.prototype.onButtonActionClick=function(){},n}(t("7pRi").a),b=t("dR4o"),d=function(){return function(){}}(),h=t("pMnS"),f=t("ZYCi"),g=u.rb({encapsulation:2,styles:[],data:{}});function v(l){return u.Nb(0,[u.Jb(402653184,1,{toolBar:0})],null,null)}function m(l){return u.Nb(0,[(l()(),u.tb(0,0,null,null,1,"gov-faturamentopadrao-grid",[],null,null,null,v,g)),u.sb(1,114688,null,0,c,[s,f.o],null,null)],function(l,n){l(n,1,0)},null)}var y=u.pb("gov-faturamentopadrao-grid",c,m,{},{},[]),B=t("Ip0R"),C=t("gIcY"),D=u.rb({encapsulation:2,styles:[],data:{}});function k(l){return u.Nb(0,[(l()(),u.tb(0,0,null,null,15,"div",[["class","row wrapper border-bottom white-bg page-heading"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,14,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),u.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["FaturamentoPadrao"])),(l()(),u.tb(4,0,null,null,11,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),u.tb(5,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Db(l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.sb(7,671744,null,0,f.r,[f.o,f.a,B.i],{routerLink:[0,"routerLink"]},null),(l()(),u.Lb(-1,null,["In\xedcio"])),(l()(),u.tb(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.tb(10,0,null,null,2,"a",[["routerLink","/faturamentopadrao"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Db(l,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.sb(11,671744,null,0,f.r,[f.o,f.a,B.i],{routerLink:[0,"routerLink"]},null),(l()(),u.Lb(-1,null,["FaturamentoPadrao"])),(l()(),u.tb(13,0,null,null,2,"li",[["class","active"]],null,null,null,null,null)),(l()(),u.tb(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Lb(15,null,["",""])),(l()(),u.tb(16,0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.tb(17,0,[["stickyBar",1]],null,47,"div",[["class","mail-box-header l3-toolbar"]],[[2,"sticky",null]],null,null,null,null)),(l()(),u.tb(18,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u.tb(19,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.enableEdit()&&u),u},null,null)),(l()(),u.tb(20,0,null,null,0,"i",[["class","fas fa-pencil-alt"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" Editar"])),(l()(),u.tb(22,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.delete("este im\xf3vel")&&u),u},null,null)),(l()(),u.tb(23,0,null,null,0,"i",[["class","fas fa-eraser"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" Apagar"])),(l()(),u.tb(25,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.save()&&u),u},null,null)),(l()(),u.tb(26,0,null,null,0,"i",[["class","fas fa-save"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" Salvar"])),(l()(),u.tb(28,0,null,null,14,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u.tb(29,0,null,null,13,"div",[["class","dropdown report-dropdown "]],null,null,null,null,null)),(l()(),u.tb(30,0,null,null,2,"button",[["aria-expanded","true"],["class","dropdown-toggle btn btn-primary"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),u.tb(31,0,null,null,0,"i",[["class","fas fa-external-link-square-alt"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Atalhos "])),(l()(),u.tb(33,0,null,null,9,"ul",[["class","dropdown-menu user-box  animated row"]],null,null,null,null,null)),(l()(),u.tb(34,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(35,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["A\xe7ao 1"])),(l()(),u.tb(37,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(38,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["A\xe7ao 2"])),(l()(),u.tb(40,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(41,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["A\xe7ao 3"])),(l()(),u.tb(43,0,null,null,18,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u.tb(44,0,null,null,17,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u.tb(45,0,null,null,2,"button",[["class","btn btn-primary"]],null,null,null,null,null)),(l()(),u.tb(46,0,null,null,0,"i",[["class","fa fa-print m-r-xs"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" Imprimir"])),(l()(),u.tb(48,0,null,null,13,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),u.tb(49,0,null,null,12,"div",[["class","dropdown report-dropdown"]],null,null,null,null,null)),(l()(),u.tb(50,0,null,null,1,"button",[["aria-expanded","true"],["class","dropdown-toggle btn btn-primary"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),u.tb(51,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),u.tb(52,0,null,null,9,"ul",[["class","dropdown-menu user-box  animated row"]],null,null,null,null,null)),(l()(),u.tb(53,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(54,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Relatorio 1"])),(l()(),u.tb(56,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(57,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Relatorio 2"])),(l()(),u.tb(59,0,null,null,2,"a",[],null,null,null,null,null)),(l()(),u.tb(60,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Relatorio 3"])),(l()(),u.tb(62,0,null,null,2,"button",[["class","btn btn-primary pull-right"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openGrid()&&u),u},null,null)),(l()(),u.tb(63,0,null,null,0,"i",[["class","fas fa-times-circle"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,[" Fechar"])),(l()(),u.tb(65,0,null,null,21,"div",[["class","ibox-content l3-form"]],null,null,null,null,null)),(l()(),u.tb(66,0,null,null,20,"div",[["class","form-horizontal row"]],null,null,null,null,null)),(l()(),u.tb(67,0,null,null,9,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),u.tb(68,0,null,null,1,"label",[["class","col-sm-2 control-label"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,["descricao"])),(l()(),u.tb(70,0,null,null,6,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),u.tb(71,0,null,null,5,"input",[["class","form-control "],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;return"input"===n&&(e=!1!==u.Db(l,72)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Db(l,72).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Db(l,72)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Db(l,72)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.activeBean.descricao=t)&&e),e},null,null)),u.sb(72,16384,null,0,C.d,[u.G,u.k,[2,C.a]],null,null),u.Ib(1024,null,C.m,function(l){return[l]},[C.d]),u.sb(74,671744,null,0,C.r,[[8,null],[8,null],[8,null],[6,C.m]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,C.n,null,[C.r]),u.sb(76,16384,null,0,C.o,[[4,C.n]],null,null),(l()(),u.tb(77,0,null,null,9,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),u.tb(78,0,null,null,1,"label",[["class","col-sm-2 control-label"]],null,null,null,null,null)),(l()(),u.Lb(-1,null,["texto"])),(l()(),u.tb(80,0,null,null,6,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),u.tb(81,0,null,null,5,"input",[["class","form-control "],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;return"input"===n&&(e=!1!==u.Db(l,82)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Db(l,82).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Db(l,82)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Db(l,82)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.activeBean.texto=t)&&e),e},null,null)),u.sb(82,16384,null,0,C.d,[u.G,u.k,[2,C.a]],null,null),u.Ib(1024,null,C.m,function(l){return[l]},[C.d]),u.sb(84,671744,null,0,C.r,[[8,null],[8,null],[8,null],[6,C.m]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,C.n,null,[C.r]),u.sb(86,16384,null,0,C.o,[[4,C.n]],null,null)],function(l,n){var t=n.component;l(n,7,0,"/"),l(n,11,0,"/faturamentopadrao"),l(n,74,0,t.activeBean.descricao),l(n,84,0,t.activeBean.texto)},function(l,n){var t=n.component;l(n,6,0,u.Db(n,7).target,u.Db(n,7).href),l(n,10,0,u.Db(n,11).target,u.Db(n,11).href),l(n,15,0,t.activeBean.id),l(n,17,0,t.stickyMenu),l(n,19,0,t.operation===t.Operation.CREATE||t.operation===t.Operation.UPDATE),l(n,25,0,t.operation!==t.Operation.CREATE&&t.operation!==t.Operation.UPDATE),l(n,71,0,t.operation==t.Operation.SELECT,u.Db(n,76).ngClassUntouched,u.Db(n,76).ngClassTouched,u.Db(n,76).ngClassPristine,u.Db(n,76).ngClassDirty,u.Db(n,76).ngClassValid,u.Db(n,76).ngClassInvalid,u.Db(n,76).ngClassPending),l(n,81,0,t.operation==t.Operation.SELECT,u.Db(n,86).ngClassUntouched,u.Db(n,86).ngClassTouched,u.Db(n,86).ngClassPristine,u.Db(n,86).ngClassDirty,u.Db(n,86).ngClassValid,u.Db(n,86).ngClassInvalid,u.Db(n,86).ngClassPending)})}function w(l){return u.Nb(0,[(l()(),u.tb(0,0,null,null,1,"gov-faturamentopadrao-form",[],null,[["window","scroll"]],function(l,n,t){var e=!0;return"window:scroll"===n&&(e=!1!==u.Db(l,1).handleScroll(t)&&e),e},k,D)),u.sb(1,4308992,null,0,p,[s,f.a,f.o],null,null)],function(l,n){l(n,1,0)},null)}var L=u.pb("gov-faturamentopadrao-form",p,w,{},{},[]),F=t("38BB"),T=t("naTb"),I=t("ZYjt"),R=t("e43+"),O=t("PCNd");t.d(n,"FaturamentoPadraoModuleNgFactory",function(){return S});var S=u.qb(d,[],function(l){return u.Ab([u.Bb(512,u.j,u.fb,[[8,[h.a,y,L]],[3,u.j],u.z]),u.Bb(4608,B.n,B.m,[u.w,[2,B.z]]),u.Bb(4608,C.z,C.z,[]),u.Bb(4608,r.h,r.n,[B.d,u.D,r.l]),u.Bb(4608,r.o,r.o,[r.h,r.m]),u.Bb(5120,r.a,function(l){return[l,new F.a]},[r.o]),u.Bb(4608,r.k,r.k,[]),u.Bb(6144,r.i,null,[r.k]),u.Bb(4608,r.g,r.g,[r.i]),u.Bb(6144,r.b,null,[r.g]),u.Bb(4608,r.f,r.j,[r.b,u.s]),u.Bb(4608,r.c,r.c,[r.f]),u.Bb(4608,T.a,T.a,[r.c,I.b]),u.Bb(4608,b.a,b.a,[f.o,T.a]),u.Bb(4608,R.a,R.a,[r.c]),u.Bb(1073742336,f.s,f.s,[[2,f.z],[2,f.o]]),u.Bb(1073742336,B.c,B.c,[]),u.Bb(1073742336,C.x,C.x,[]),u.Bb(1073742336,C.k,C.k,[]),u.Bb(1073742336,r.e,r.e,[]),u.Bb(1073742336,r.d,r.d,[]),u.Bb(1073742336,O.a,O.a,[]),u.Bb(1073742336,d,d,[]),u.Bb(256,r.l,"XSRF-TOKEN",[]),u.Bb(256,r.m,"X-XSRF-TOKEN",[]),u.Bb(1024,f.m,function(){return[[{path:"",component:c,canActivate:[b.a]},{path:":id",component:p,canActivate:[b.a]}]]},[])])})},fRS3:function(l,n,t){"use strict";var u=t("67Y/"),e={production:!1,getBaseURL:function(){return"http://localhost:8080"}},o=t("3/DG");t.d(n,"a",function(){return i});var i=function(){function l(l){this.http=l,this.API_ROOT_URL=e.getBaseURL(),this.reportName=""}return l.prototype.loadByFilter=function(l){return this.http.post(this.API_ROOT_URL+"/"+this.getPathModule()+"/",l)},l.prototype.save=function(l){return console.log(l),this.http.post(this.API_ROOT_URL+"/"+this.getPathModule()+"/save",JSON.parse(o(l)))},l.prototype.loadQuery=function(l,n){return this.http.post(this.API_ROOT_URL+"/"+this.getPathModule()+"/q/"+n,l)},l.prototype.findById=function(l){return this.http.get(this.API_ROOT_URL+"/"+this.getPathModule()+"/"+l)},l.prototype.delete=function(l){return this.http.delete(this.API_ROOT_URL+"/"+this.getPathModule()+"/"+l)},l.prototype.hashCode=function(l){var n=0,t=l.length,u=0;if(t>0)for(;u<t;)n=(n<<5)-n+l.charCodeAt(u++)|0;return n},l.prototype.printReport=function(l){this.reportName=l,null!==this.reportName&&""!==this.reportName&&this.downloadPDF().subscribe(function(l){var n=URL.createObjectURL(l);window.open(n)})},l.prototype.downloadPDF=function(){return this.http.post(this.API_ROOT_URL+"/reports/"+this.reportName,{page:1,limit:15,whereClauses:[]},{responseType:"blob"}).pipe(Object(u.a)(function(l){return new Blob([l],{type:"application/pdf"})}))},l}()}}]);