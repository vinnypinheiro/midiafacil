import { RouterModule } from '@angular/router';

import {ProdutoGridComponent} from './produto-grid/produto-grid.component';
import {ProdutoFormComponent} from './produto-form/produto-form.component';
import {AuthGuard} from '../../security/auth.guard';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {
    MatButtonModule, MatCardModule,
    MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule
} from "@angular/material";
import {FuseSharedModule} from "../../../@fuse/shared.module";
import {ProdutoViewComponent} from "./produto-view/produto-view.component";

const ROUTES  = [
        {
            path: '',
                    component: ProdutoGridComponent,
                canActivate: [AuthGuard]
        },
        {
            path: ':id',
                    component: ProdutoFormComponent,
                canActivate: [AuthGuard]
        },
    {
        path: 'view/:id',
        component: ProdutoViewComponent,
        canActivate: [AuthGuard]
    }];

        @NgModule({
                imports: [RouterModule.forChild(ROUTES),
                SharedModule,
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
                ProdutoGridComponent,
                ProdutoFormComponent,
                    ProdutoViewComponent
                ],
                entryComponents: [ProdutoGridComponent,ProdutoFormComponent,ProdutoViewComponent],
                schemas: [],
                providers: []
                })
        export class ProdutoModule {}
