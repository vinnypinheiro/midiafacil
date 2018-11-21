import { RouterModule } from '@angular/router'; 
 
import {DeclaracaoFiscalGridComponent} from './declaracaofiscal-grid/declaracaofiscal-grid.component'; 
import {DeclaracaoFiscalFormComponent} from './declaracaofiscal-form/declaracaofiscal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {DeclaracaoFiscalService} from './declaracaofiscal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: DeclaracaoFiscalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: DeclaracaoFiscalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                DeclaracaoFiscalGridComponent, 
                DeclaracaoFiscalFormComponent, 
                ], 
                entryComponents: [DeclaracaoFiscalGridComponent,DeclaracaoFiscalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class DeclaracaoFiscalModule {} 
