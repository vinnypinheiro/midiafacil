import { RouterModule } from '@angular/router'; 
 
import {MoedaGridComponent} from './moeda-grid/moeda-grid.component'; 
import {MoedaFormComponent} from './moeda-form/moeda-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {MoedaService} from './moeda.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MoedaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MoedaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                MoedaGridComponent, 
                MoedaFormComponent, 
                ], 
                entryComponents: [MoedaGridComponent,MoedaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MoedaModule {} 
