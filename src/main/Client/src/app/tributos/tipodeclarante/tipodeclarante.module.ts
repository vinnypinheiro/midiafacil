import { RouterModule } from '@angular/router'; 
 
import {TipoDeclaranteGridComponent} from './tipodeclarante-grid/tipodeclarante-grid.component'; 
import {TipoDeclaranteFormComponent} from './tipodeclarante-form/tipodeclarante-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoDeclaranteService} from './tipodeclarante.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoDeclaranteGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoDeclaranteFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoDeclaranteGridComponent, 
                TipoDeclaranteFormComponent, 
                ], 
                entryComponents: [TipoDeclaranteGridComponent,TipoDeclaranteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoDeclaranteModule {} 
