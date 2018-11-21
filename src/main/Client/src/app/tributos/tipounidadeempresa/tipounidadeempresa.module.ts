import { RouterModule } from '@angular/router'; 
 
import {TipoUnidadeEmpresaGridComponent} from './tipounidadeempresa-grid/tipounidadeempresa-grid.component'; 
import {TipoUnidadeEmpresaFormComponent} from './tipounidadeempresa-form/tipounidadeempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoUnidadeEmpresaService} from './tipounidadeempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoUnidadeEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoUnidadeEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoUnidadeEmpresaGridComponent, 
                TipoUnidadeEmpresaFormComponent, 
                ], 
                entryComponents: [TipoUnidadeEmpresaGridComponent,TipoUnidadeEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoUnidadeEmpresaModule {} 
