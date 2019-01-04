import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { MatDialogModule } from '@angular/material';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

// Módulo de Roteamento
import {AppRoutingModule} from './app-routing.module';

//imports cliente
import {AuthGuard} from "./security/auth.guard";
import {LoginService} from "./security/login/login.service";
import {SharedService} from "./shared/shared.service";
import {SharedModule} from "./shared/shared.module";

import {ImportService } from "./import.service";

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample' 
    }
];

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AppRoutingModule,
        SharedModule,
        MatDialogModule,
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [        
    SharedService,
    AuthGuard,
    LoginService,
        ImportService,
    ]
})
export class AppModule
{
}
