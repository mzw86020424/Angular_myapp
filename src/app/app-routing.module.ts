import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

const routes: Routes = [
  // http://～/ → Dashboard にリダイレクト
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // http://～/dashbord → Dashboard を表示
  { path: 'dashboard', component: DashboardComponent },
  // http://～/users → ユーザ一覧を表示
  { path: 'users', component: UserListComponent },
  // http://～/users/{user_id}/edit → ユーザ更新画面を表示
  { path: 'users/:id/edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
