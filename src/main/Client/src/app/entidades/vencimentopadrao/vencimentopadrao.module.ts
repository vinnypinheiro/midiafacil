import { RouterModule } from '@angular/router'; 
 
import {VencimentoPadraoGridComponent} from './vencimentopadrao-grid/vencimentopadrao-grid.component'; 
import {VencimentoPadraoFormComponent} from './vencimentopadrao-form/vencimentopadrao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {VencimentoPadraoService} from './vencimentopadrao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: VencimentoPadraoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: VencimentoPadraoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                VencimentoPadraoGridComponent, 
                VencimentoPadraoFormComponent, 
                ], 
                entryComponents: [VencimentoPadraoGridComponent,VencimentoPadraoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class VencimentoPadraoModule {} 
