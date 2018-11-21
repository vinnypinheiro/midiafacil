import { RouterModule } from '@angular/router'; 
 
import {TipoConcessaoGridComponent} from './tipoconcessao-grid/tipoconcessao-grid.component'; 
import {TipoConcessaoFormComponent} from './tipoconcessao-form/tipoconcessao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoConcessaoService} from './tipoconcessao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoConcessaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoConcessaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoConcessaoGridComponent, 
                TipoConcessaoFormComponent, 
                ], 
                entryComponents: [TipoConcessaoGridComponent,TipoConcessaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoConcessaoModule {} 
