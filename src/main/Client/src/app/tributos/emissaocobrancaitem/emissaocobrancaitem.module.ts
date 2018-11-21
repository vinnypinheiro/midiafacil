import { RouterModule } from '@angular/router'; 
 
import {EmissaoCobrancaItemGridComponent} from './emissaocobrancaitem-grid/emissaocobrancaitem-grid.component'; 
import {EmissaoCobrancaItemFormComponent} from './emissaocobrancaitem-form/emissaocobrancaitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EmissaoCobrancaItemService} from './emissaocobrancaitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EmissaoCobrancaItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EmissaoCobrancaItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EmissaoCobrancaItemGridComponent, 
                EmissaoCobrancaItemFormComponent, 
                ], 
                entryComponents: [EmissaoCobrancaItemGridComponent,EmissaoCobrancaItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EmissaoCobrancaItemModule {} 
