import { RouterModule } from '@angular/router'; 
 
import {FormatoGridComponent} from './formato-grid/formato-grid.component'; 
import {FormatoFormComponent} from './formato-form/formato-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {FormatoService} from './formato.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: FormatoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: FormatoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                FormatoGridComponent, 
                FormatoFormComponent, 
                ], 
                entryComponents: [FormatoGridComponent,FormatoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class FormatoModule {} 
