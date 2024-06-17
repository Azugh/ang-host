import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { NgZorroImportModule } from '../../NgZorroImportsModule';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
