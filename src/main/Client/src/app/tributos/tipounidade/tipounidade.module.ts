import { RouterModule } from '@angular/router'; 
 
import {TipoUnidadeGridComponent} from './tipounidade-grid/tipounidade-grid.component'; 
import {TipoUnidadeFormComponent} from './tipounidade-form/tipounidade-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoUnidadeService} from './tipounidade.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoUnidadeGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoUnidadeFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoUnidadeGridComponent, 
                TipoUnidadeFormComponent, 
                ], 
                entryComponents: [TipoUnidadeGridComponent,TipoUnidadeFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoUnidadeModule {} 
