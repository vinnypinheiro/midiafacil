import { RouterModule } from '@angular/router'; 
 
import {StatusNotaFiscalGridComponent} from './statusnotafiscal-grid/statusnotafiscal-grid.component'; 
import {StatusNotaFiscalFormComponent} from './statusnotafiscal-form/statusnotafiscal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {StatusNotaFiscalService} from './statusnotafiscal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: StatusNotaFiscalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: StatusNotaFiscalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                StatusNotaFiscalGridComponent, 
                StatusNotaFiscalFormComponent, 
                ], 
                entryComponents: [StatusNotaFiscalGridComponent,StatusNotaFiscalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class StatusNotaFiscalModule {} 
