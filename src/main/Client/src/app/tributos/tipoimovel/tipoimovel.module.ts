import { RouterModule } from '@angular/router'; 
 
import {TipoImovelGridComponent} from './tipoimovel-grid/tipoimovel-grid.component'; 
import {TipoImovelFormComponent} from './tipoimovel-form/tipoimovel-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoImovelService} from './tipoimovel.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoImovelGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoImovelFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoImovelGridComponent, 
                TipoImovelFormComponent, 
                ], 
                entryComponents: [TipoImovelGridComponent,TipoImovelFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoImovelModule {} 
