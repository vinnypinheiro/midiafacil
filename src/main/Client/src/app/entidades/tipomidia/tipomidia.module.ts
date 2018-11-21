import { RouterModule } from '@angular/router'; 
 
import {TipoMidiaGridComponent} from './tipomidia-grid/tipomidia-grid.component'; 
import {TipoMidiaFormComponent} from './tipomidia-form/tipomidia-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoMidiaService} from './tipomidia.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoMidiaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoMidiaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoMidiaGridComponent, 
                TipoMidiaFormComponent, 
                ], 
                entryComponents: [TipoMidiaGridComponent,TipoMidiaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoMidiaModule {} 
