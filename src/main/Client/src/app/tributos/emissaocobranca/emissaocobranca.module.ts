import { RouterModule } from '@angular/router'; 
 
import {EmissaoCobrancaGridComponent} from './emissaocobranca-grid/emissaocobranca-grid.component'; 
import {EmissaoCobrancaFormComponent} from './emissaocobranca-form/emissaocobranca-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EmissaoCobrancaService} from './emissaocobranca.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EmissaoCobrancaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EmissaoCobrancaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EmissaoCobrancaGridComponent, 
                EmissaoCobrancaFormComponent, 
                ], 
                entryComponents: [EmissaoCobrancaGridComponent,EmissaoCobrancaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EmissaoCobrancaModule {} 
