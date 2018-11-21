import { RouterModule } from '@angular/router'; 
 
import {EnquadramentoFiscalGridComponent} from './enquadramentofiscal-grid/enquadramentofiscal-grid.component'; 
import {EnquadramentoFiscalFormComponent} from './enquadramentofiscal-form/enquadramentofiscal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EnquadramentoFiscalService} from './enquadramentofiscal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EnquadramentoFiscalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EnquadramentoFiscalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EnquadramentoFiscalGridComponent, 
                EnquadramentoFiscalFormComponent, 
                ], 
                entryComponents: [EnquadramentoFiscalGridComponent,EnquadramentoFiscalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EnquadramentoFiscalModule {} 
