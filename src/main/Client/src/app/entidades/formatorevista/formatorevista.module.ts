import { RouterModule } from '@angular/router'; 
 
import {FormatoRevistaGridComponent} from './formatorevista-grid/formatorevista-grid.component'; 
import {FormatoRevistaFormComponent} from './formatorevista-form/formatorevista-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {FormatoRevistaService} from './formatorevista.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: FormatoRevistaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: FormatoRevistaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                FormatoRevistaGridComponent, 
                FormatoRevistaFormComponent, 
                ], 
                entryComponents: [FormatoRevistaGridComponent,FormatoRevistaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class FormatoRevistaModule {} 
