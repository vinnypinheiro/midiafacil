import { RouterModule } from '@angular/router'; 
 
import {CalendarioFiscalGridComponent} from './calendariofiscal-grid/calendariofiscal-grid.component'; 
import {CalendarioFiscalFormComponent} from './calendariofiscal-form/calendariofiscal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CalendarioFiscalService} from './calendariofiscal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CalendarioFiscalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CalendarioFiscalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CalendarioFiscalGridComponent, 
                CalendarioFiscalFormComponent, 
                ], 
                entryComponents: [CalendarioFiscalGridComponent,CalendarioFiscalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CalendarioFiscalModule {} 
