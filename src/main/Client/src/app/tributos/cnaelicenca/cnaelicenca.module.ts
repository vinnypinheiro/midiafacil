import { RouterModule } from '@angular/router'; 
 
import {CnaeLicencaGridComponent} from './cnaelicenca-grid/cnaelicenca-grid.component'; 
import {CnaeLicencaFormComponent} from './cnaelicenca-form/cnaelicenca-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeLicencaService} from './cnaelicenca.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeLicencaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeLicencaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeLicencaGridComponent, 
                CnaeLicencaFormComponent, 
                ], 
                entryComponents: [CnaeLicencaGridComponent,CnaeLicencaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeLicencaModule {} 
