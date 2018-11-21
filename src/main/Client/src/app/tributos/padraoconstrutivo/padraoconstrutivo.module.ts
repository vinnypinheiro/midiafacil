import { RouterModule } from '@angular/router'; 
 
import {PadraoConstrutivoGridComponent} from './padraoconstrutivo-grid/padraoconstrutivo-grid.component'; 
import {PadraoConstrutivoFormComponent} from './padraoconstrutivo-form/padraoconstrutivo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PadraoConstrutivoService} from './padraoconstrutivo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PadraoConstrutivoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PadraoConstrutivoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PadraoConstrutivoGridComponent, 
                PadraoConstrutivoFormComponent, 
                ], 
                entryComponents: [PadraoConstrutivoGridComponent,PadraoConstrutivoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PadraoConstrutivoModule {} 
