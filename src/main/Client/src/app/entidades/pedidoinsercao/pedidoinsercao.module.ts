import { RouterModule } from '@angular/router'; 
 
import {PedidoInsercaoGridComponent} from './pedidoinsercao-grid/pedidoinsercao-grid.component'; 
import {PedidoInsercaoFormComponent} from './pedidoinsercao-form/pedidoinsercao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {MatDialogModule, MatStepperModule} from '@angular/material';


import {
    MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule,
    MatSortModule,MatCardModule,
    MatTableModule, MatTabsModule
} from '@angular/material';

import { FuseSidebarModule } from '@fuse/components';


import { FuseSharedModule } from '@fuse/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {PedidoinsercaoViewComponent} from "./pedidoinsercao-view/pedidoinsercao-view.component";
import {PedidoInsercaoLoteComponent} from "./pedidoinsercao-lote/pedidoinsercao-lote.component";

 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PedidoInsercaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: 'lote', 
                    component: PedidoInsercaoLoteComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PedidoInsercaoFormComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'view/:id',
        component: PedidoinsercaoViewComponent,
        canActivate: [AuthGuard]
    }];
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule,

                    ReactiveFormsModule,
                    MatStepperModule,
                    MatButtonModule,
                    MatChipsModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSortModule,
                    MatSnackBarModule,
                    MatTableModule,
                    MatTabsModule,
                    MatDialogModule,
                    MatCardModule,
                    FuseSidebarModule,
                    FuseSharedModule
                ], 
                declarations: [ 
                PedidoInsercaoGridComponent, 
                PedidoInsercaoFormComponent,
                    PedidoinsercaoViewComponent,
                    PedidoInsercaoLoteComponent,
                ], 
                entryComponents: [PedidoInsercaoGridComponent,PedidoInsercaoFormComponent,PedidoinsercaoViewComponent],
                schemas: [], 
                providers: [] 
                }) 
        export class PedidoInsercaoModule {} 
