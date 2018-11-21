import { RouterModule } from '@angular/router'; 
 
import {TipoDebitoGridComponent} from './tipodebito-grid/tipodebito-grid.component'; 
import {TipoDebitoFormComponent} from './tipodebito-form/tipodebito-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoDebitoService} from './tipodebito.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoDebitoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoDebitoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoDebitoGridComponent, 
                TipoDebitoFormComponent, 
                ], 
                entryComponents: [TipoDebitoGridComponent,TipoDebitoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoDebitoModule {} 
