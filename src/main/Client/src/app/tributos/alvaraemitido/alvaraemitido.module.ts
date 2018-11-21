import { RouterModule } from '@angular/router'; 
 
import {AlvaraEmitidoGridComponent} from './alvaraemitido-grid/alvaraemitido-grid.component'; 
import {AlvaraEmitidoFormComponent} from './alvaraemitido-form/alvaraemitido-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {AlvaraEmitidoService} from './alvaraemitido.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: AlvaraEmitidoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: AlvaraEmitidoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                AlvaraEmitidoGridComponent, 
                AlvaraEmitidoFormComponent, 
                ], 
                entryComponents: [AlvaraEmitidoGridComponent,AlvaraEmitidoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class AlvaraEmitidoModule {} 
