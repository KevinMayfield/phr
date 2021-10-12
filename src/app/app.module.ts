import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import {CovalentLayoutModule} from "@covalent/core/layout";
import {CovalentStepsModule} from "@covalent/core/steps";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentBaseEchartsModule} from "@covalent/echarts/base";
import {CovalentHttpModule} from "@covalent/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainComponent} from "./main/main.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {CovalentDataTableModule} from "@covalent/core/data-table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatList, MatListModule} from "@angular/material/list";
import {FlexLayoutModule} from "@angular/flex-layout";
import { OrdersComponent } from './orders/orders.component';
import {PrescriptionRefillComponent} from "./gp-prescriptions/prescription-refill.component";
import {PrescriptionOrderDetailComponent} from "./prescription-order-detail/prescription-order-detail.component";
import {CovalentMessageModule} from "@covalent/core/message";
import {PrescriptionOrdersComponent} from "./eps-orders/prescription-orders.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./service/auth-guard";
import { LoginComponent } from './login/login.component';
import {CovalentFileModule} from "@covalent/core/file";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GpDiaryComponent} from "./gp-diary/gp-diary.component";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrdersComponent,
      PrescriptionRefillComponent,
      PrescriptionOrderDetailComponent,
      PrescriptionOrdersComponent,
      GpDiaryComponent,
      CallbackComponent,
      LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,

        CovalentLayoutModule,
        CovalentStepsModule,
        // (optional) Additional Covalent Modules imports
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
        CovalentBaseEchartsModule,
        CovalentMessageModule,


        MatIconModule,
        MatButtonModule,
        CovalentDataTableModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatTooltipModule,
        MatChipsModule,
        CovalentFileModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
