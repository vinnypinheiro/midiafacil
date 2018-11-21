import { RouterModule } from '@angular/router'; 
 
import {TipoConstituicaoEmpresaGridComponent} from './tipoconstituicaoempresa-grid/tipoconstituicaoempresa-grid.component'; 
import {TipoConstituicaoEmpresaFormComponent} from './tipoconstituicaoempresa-form/tipoconstituicaoempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoConstituicaoEmpresaService} from './tipoconstituicaoempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoConstituicaoEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoConstituicaoEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoConstituicaoEmpresaGridComponent, 
                TipoConstituicaoEmpresaFormComponent, 
                ], 
                entryComponents: [TipoConstituicaoEmpresaGridComponent,TipoConstituicaoEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoConstituicaoEmpresaModule {} 
