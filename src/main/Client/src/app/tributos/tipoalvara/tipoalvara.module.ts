import { RouterModule } from '@angular/router'; 
 
import {TipoAlvaraGridComponent} from './tipoalvara-grid/tipoalvara-grid.component'; 
import {TipoAlvaraFormComponent} from './tipoalvara-form/tipoalvara-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoAlvaraService} from './tipoalvara.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoAlvaraGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoAlvaraFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoAlvaraGridComponent, 
                TipoAlvaraFormComponent, 
                ], 
                entryComponents: [TipoAlvaraGridComponent,TipoAlvaraFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoAlvaraModule {} 
