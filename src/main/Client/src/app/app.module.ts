import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MainPageService} from "./main-page/main-page.service";
import {AuthGuard} from "./security/auth.guard";
import {LoginService} from "./security/login/login.service";
import {SharedService} from "./shared/shared.service";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    /*AppComponent,*/
  ],
  providers: [
    SharedService,
    AuthGuard,
    MainPageService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
