import { RouterModule } from '@angular/router'; 
 
import {FormatoGridComponent} from './formato-grid/formato-grid.component'; 
import {FormatoFormComponent} from './formato-form/formato-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';


import {
    MatButtonModule, MatCardModule,
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
    MatTabsModule,
    MatDatepickerModule

} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";
import {FuseSharedModule} from "../../../@fuse/shared.module";
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: FormatoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: FormatoFormComponent, 
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
                    MatCardModule,
                    MatDatepickerModule,

                    FuseSharedModule,
                ], 
                declarations: [ 
                FormatoGridComponent, 
                FormatoFormComponent, 
                ], 
                entryComponents: [FormatoGridComponent,FormatoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class FormatoModule {} 
