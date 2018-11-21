import { RouterModule } from '@angular/router'; 
 
import {TipoLogradouroGridComponent} from './tipologradouro-grid/tipologradouro-grid.component'; 
import {TipoLogradouroFormComponent} from './tipologradouro-form/tipologradouro-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoLogradouroService} from './tipologradouro.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoLogradouroGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoLogradouroFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoLogradouroGridComponent, 
                TipoLogradouroFormComponent, 
                ], 
                entryComponents: [TipoLogradouroGridComponent,TipoLogradouroFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoLogradouroModule {} 
