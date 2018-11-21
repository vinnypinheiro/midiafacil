import {RouterModule} from '@angular/router';

import {DebitoGridComponent} from './debito-grid/debito-grid.component';
import {DebitoFormComponent} from './debito-form/debito-form.component';
import {AuthGuard} from '../../security/auth.guard';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

const ROUTES = [
  {
    path: '',
    component: DebitoGridComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: DebitoFormComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    DebitoGridComponent,
    DebitoFormComponent
  ],
  entryComponents: [DebitoGridComponent, DebitoFormComponent],
  schemas: [],
  providers: []
})
export class DebitoModule {
}
