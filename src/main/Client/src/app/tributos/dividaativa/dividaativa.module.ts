import { RouterModule } from '@angular/router'; 
 
import {DividaAtivaGridComponent} from './dividaativa-grid/dividaativa-grid.component'; 
import {DividaAtivaFormComponent} from './dividaativa-form/dividaativa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {DividaAtivaService} from './dividaativa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: DividaAtivaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: DividaAtivaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                DividaAtivaGridComponent, 
                DividaAtivaFormComponent, 
                ], 
                entryComponents: [DividaAtivaGridComponent,DividaAtivaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class DividaAtivaModule {} 
