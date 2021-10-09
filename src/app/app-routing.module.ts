import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {OrdersComponent} from "./orders/orders.component";

const routes: Routes = [
  { path: '', component: MainComponent,
    children : [
      {
        path: '', component: OrdersComponent
      }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
