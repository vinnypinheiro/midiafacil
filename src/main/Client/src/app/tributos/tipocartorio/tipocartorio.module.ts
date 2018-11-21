import { RouterModule } from '@angular/router'; 
 
import {TipoCartorioGridComponent} from './tipocartorio-grid/tipocartorio-grid.component'; 
import {TipoCartorioFormComponent} from './tipocartorio-form/tipocartorio-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoCartorioService} from './tipocartorio.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoCartorioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoCartorioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoCartorioGridComponent, 
                TipoCartorioFormComponent, 
                ], 
                entryComponents: [TipoCartorioGridComponent,TipoCartorioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoCartorioModule {} 
