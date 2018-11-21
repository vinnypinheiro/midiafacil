import { RouterModule } from '@angular/router'; 
 
import {TipoDeclaracaoGridComponent} from './tipodeclaracao-grid/tipodeclaracao-grid.component'; 
import {TipoDeclaracaoFormComponent} from './tipodeclaracao-form/tipodeclaracao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoDeclaracaoService} from './tipodeclaracao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoDeclaracaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoDeclaracaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoDeclaracaoGridComponent, 
                TipoDeclaracaoFormComponent, 
                ], 
                entryComponents: [TipoDeclaracaoGridComponent,TipoDeclaracaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoDeclaracaoModule {} 
