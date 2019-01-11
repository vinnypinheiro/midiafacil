import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';


import {VeiculoGridComponent} from './veiculo-grid/veiculo-grid.component'; 
import {VeiculoFormComponent} from './veiculo-form/veiculo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import {SharedModule} from '../../shared/shared.module';
import {DialogProgramaForm, VeiculoViewComponent} from './veiculo-view/veiculo-view.component';
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: VeiculoGridComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'new',
        component: VeiculoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'view/:id',
        component: VeiculoViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: VeiculoFormComponent,
        canActivate: [AuthGuard]
    }];
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule ,
                    ReactiveFormsModule,
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

                    FuseSharedModule,

                ReactiveFormsModule
                ], 
                declarations: [ 
                VeiculoGridComponent, 
                VeiculoFormComponent, VeiculoViewComponent, DialogProgramaForm
                ], 
                entryComponents: [VeiculoGridComponent,VeiculoFormComponent, DialogProgramaForm],
                schemas: [], 
                providers: [] 
                }) 
        export class VeiculoModule {} 
