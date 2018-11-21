import { RouterModule } from '@angular/router'; 
 
import {TipoCertidaoGridComponent} from './tipocertidao-grid/tipocertidao-grid.component'; 
import {TipoCertidaoFormComponent} from './tipocertidao-form/tipocertidao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoCertidaoService} from './tipocertidao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoCertidaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoCertidaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoCertidaoGridComponent, 
                TipoCertidaoFormComponent, 
                ], 
                entryComponents: [TipoCertidaoGridComponent,TipoCertidaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoCertidaoModule {} 
