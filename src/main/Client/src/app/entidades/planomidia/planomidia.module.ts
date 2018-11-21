import { RouterModule } from '@angular/router'; 
 
import {PlanoMidiaGridComponent} from './planomidia-grid/planomidia-grid.component'; 
import {PlanoMidiaFormComponent} from './planomidia-form/planomidia-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PlanoMidiaService} from './planomidia.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PlanoMidiaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PlanoMidiaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PlanoMidiaGridComponent, 
                PlanoMidiaFormComponent, 
                ], 
                entryComponents: [PlanoMidiaGridComponent,PlanoMidiaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PlanoMidiaModule {} 
