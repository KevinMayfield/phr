import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {OrdersComponent} from './orders/orders.component';
import {CallbackComponent} from './callback/callback.component';
import {AuthGuard} from './service/auth-guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: MainComponent,
    children : [
      {
        path: '', component: OrdersComponent
      }]},
  {  path: 'callback', component : CallbackComponent},
  {  path: 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
