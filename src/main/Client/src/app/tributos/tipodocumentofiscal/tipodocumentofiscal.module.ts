import { RouterModule } from '@angular/router'; 
 
import {TipoDocumentoFiscalGridComponent} from './tipodocumentofiscal-grid/tipodocumentofiscal-grid.component'; 
import {TipoDocumentoFiscalFormComponent} from './tipodocumentofiscal-form/tipodocumentofiscal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoDocumentoFiscalService} from './tipodocumentofiscal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoDocumentoFiscalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoDocumentoFiscalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoDocumentoFiscalGridComponent, 
                TipoDocumentoFiscalFormComponent, 
                ], 
                entryComponents: [TipoDocumentoFiscalGridComponent,TipoDocumentoFiscalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoDocumentoFiscalModule {} 
