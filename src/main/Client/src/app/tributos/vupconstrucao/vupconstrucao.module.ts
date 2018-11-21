import { RouterModule } from '@angular/router'; 
 
import {VupConstrucaoGridComponent} from './vupconstrucao-grid/vupconstrucao-grid.component'; 
import {VupConstrucaoFormComponent} from './vupconstrucao-form/vupconstrucao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {VupConstrucaoService} from './vupconstrucao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: VupConstrucaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: VupConstrucaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                VupConstrucaoGridComponent, 
                VupConstrucaoFormComponent, 
                ], 
                entryComponents: [VupConstrucaoGridComponent,VupConstrucaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class VupConstrucaoModule {} 
