import { RouterModule } from '@angular/router'; 
 
import {CartorioGridComponent} from './cartorio-grid/cartorio-grid.component'; 
import {CartorioFormComponent} from './cartorio-form/cartorio-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CartorioService} from './cartorio.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CartorioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CartorioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CartorioGridComponent, 
                CartorioFormComponent, 
                ], 
                entryComponents: [CartorioGridComponent,CartorioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CartorioModule {} 
