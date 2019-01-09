import { RouterModule } from '@angular/router'; 
 
import {PlanoMidiaGridComponent} from './planomidia-grid/planomidia-grid.component'; 
import {PlanoMidiaFormComponent , } from './planomidia-form/planomidia-form.component';
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {MatCardModule, MatDatepickerModule, MatDialogModule} from '@angular/material';


import {
    MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule,
    MatSortModule,
    MatTableModule, MatTabsModule,MatCheckboxModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { FuseSharedModule } from '@fuse/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ClienteViewComponent} from "../cliente/cliente-view/cliente-view.component";
import {
    PlanomidiaViewComponent, DialogPecaForm, DialogGradeForm,
    DeleteGradeDialog, DialogGradeSiteForm
} from './planomidia-view/planomidia-view.component';
import {PlanomidiaImportComponent} from "./planomidia-import/planomidia-import.component";
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PlanoMidiaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: 'new',
                    component: PlanoMidiaFormComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'view/:id',
        component: PlanomidiaViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'import/:id',
        component: PlanomidiaImportComponent,
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
                    FuseSharedModule,
                    MatDatepickerModule,
                    MatCardModule,
                    MatCheckboxModule,

                ], 
                declarations: [ 
                PlanoMidiaGridComponent, 
                PlanoMidiaFormComponent,
                    PlanomidiaViewComponent,
                    PlanomidiaImportComponent,
                    DialogPecaForm,
                    DialogGradeForm,
                    DeleteGradeDialog,
                    DialogGradeSiteForm
                ], 
                entryComponents: [PlanoMidiaGridComponent,PlanoMidiaFormComponent, PlanomidiaImportComponent, DialogPecaForm, DialogGradeForm,DeleteGradeDialog, DialogGradeSiteForm
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class PlanoMidiaModule {} 
