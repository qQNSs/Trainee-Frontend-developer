import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainModule } from 'process';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserInfoComponent},
  {path: '**', redirectTo: 'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
