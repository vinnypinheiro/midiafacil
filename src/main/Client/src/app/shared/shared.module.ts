import {NgModule} from "@angular/core";
import {ToolBarComponent} from "../components/tool-bar/tool-bar.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LookupFieldComponent} from "../components/lookup-field/lookup-field.component";
import {SideBarComponent} from "../side-bar/side-bar.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {FooterPageComponent} from "../footer-page/footer-page.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {LoginComponent} from "../security/login/login.component";
import {LogoutComponent} from "../security/logout/LogoutComponent";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "../security/auth.guard";
import {LoginService} from "../security/login/login.service";
import {MainPageService} from "../main-page/main-page.service";
import {SharedService} from "./shared.service";
import {AppComponent} from "../app.component";
import {RouterModule} from "@angular/router";
import {CustomHttpInterceptor} from "../security/CustomHttpInterceptor";
import {FilterComponent} from "../components/filter/filter.component";
import {HeaderPageComponent} from "../header-page/header-page.component";
import {ReportFilterComponent} from "../report-filter/report-filter.component";
import {ReportScreenTributacaoComponent} from "../screen-reports/report-screen-tributacao/report-screen-tributacao.component";
import {ReportScreenAdministracaoComponent} from "../screen-reports/report-screen-administracao/report-screen-administracao.component";
import {ReportScreenFinanceiroComponent} from "../screen-reports/report-screen-financeiro/report-screen-financeiro.component";
import {ReportScreenAuxiliarComponent} from "../screen-reports/report-screen-auxiliar/report-screen-auxiliar.component";
import {ReportScreenEconomicoComponent} from "../screen-reports/report-screen-economico/report-screen-economico.component";
import {ReportScreenNotafiscalComponent} from "../screen-reports/report-screen-notafiscal/report-screen-notafiscal.component";
import {ReportScreenProcuradoriaComponent} from "../screen-reports/report-screen-procuradoria/report-screen-procuradoria.component";
import {ReportScreenTransporteComponent} from "../screen-reports/report-screen-transporte/report-screen-transporte.component";
import {ReportScreenUrbanismoComponent} from "../screen-reports/report-screen-urbanismo/report-screen-urbanismo.component";
import {LookupComponent} from "../components/lookup/lookup.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    LogoutComponent,
    ToolBarComponent,
    LookupFieldComponent,
    TopBarComponent,
    SideBarComponent,
    FooterPageComponent,
    FilterComponent,
    HeaderPageComponent,
    ReportFilterComponent,
    ReportScreenAdministracaoComponent,
    ReportScreenAuxiliarComponent,
    ReportScreenEconomicoComponent,
    ReportScreenFinanceiroComponent,
    ReportScreenNotafiscalComponent,
    ReportScreenProcuradoriaComponent,
    ReportScreenTransporteComponent,
    ReportScreenTributacaoComponent,
    ReportScreenUrbanismoComponent,
    ReportFilterComponent,
    LookupComponent
  ],
  exports: [
    AppComponent,
    CommonModule,
    LookupFieldComponent,
    ToolBarComponent,
    SideBarComponent,
    TopBarComponent,
    FooterPageComponent,
    FormsModule,
    HeaderPageComponent,
    FilterComponent,
    ReportFilterComponent,
    ReportScreenAdministracaoComponent,
    ReportScreenAuxiliarComponent,
    ReportScreenEconomicoComponent,
    ReportScreenFinanceiroComponent,
    ReportScreenNotafiscalComponent,
    ReportScreenProcuradoriaComponent,
    ReportScreenTransporteComponent,
    ReportScreenTributacaoComponent,
    ReportScreenUrbanismoComponent,
    ReportFilterComponent,
    LookupComponent
  ],
  entryComponents: [],
  schemas: [],
  providers: [
    AuthGuard,
    SharedService,
    MainPageService,
    LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class SharedModule {
}
