import { RouterModule } from '@angular/router'; 
 
import {TipoUsoAlvaraGridComponent} from './tipousoalvara-grid/tipousoalvara-grid.component'; 
import {TipoUsoAlvaraFormComponent} from './tipousoalvara-form/tipousoalvara-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoUsoAlvaraService} from './tipousoalvara.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoUsoAlvaraGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoUsoAlvaraFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoUsoAlvaraGridComponent, 
                TipoUsoAlvaraFormComponent, 
                ], 
                entryComponents: [TipoUsoAlvaraGridComponent,TipoUsoAlvaraFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoUsoAlvaraModule {} 
