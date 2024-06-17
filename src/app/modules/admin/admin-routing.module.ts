import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostItemComponent } from './components/post-item/post-item.component';

const routes: Routes = [
  { path: "dashboard", component: AdminDashboardComponent },
  { path: "item", component: PostItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
