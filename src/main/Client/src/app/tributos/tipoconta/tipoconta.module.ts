import { RouterModule } from '@angular/router'; 
 
import {TipoContaGridComponent} from './tipoconta-grid/tipoconta-grid.component'; 
import {TipoContaFormComponent} from './tipoconta-form/tipoconta-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoContaService} from './tipoconta.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoContaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoContaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoContaGridComponent, 
                TipoContaFormComponent, 
                ], 
                entryComponents: [TipoContaGridComponent,TipoContaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoContaModule {} 
