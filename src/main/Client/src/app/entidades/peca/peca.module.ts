import { RouterModule } from '@angular/router'; 
 
import {PecaGridComponent} from './peca-grid/peca-grid.component'; 
import {PecaFormComponent} from './peca-form/peca-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PecaService} from './peca.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PecaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PecaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PecaGridComponent, 
                PecaFormComponent, 
                ], 
                entryComponents: [PecaGridComponent,PecaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PecaModule {} 
