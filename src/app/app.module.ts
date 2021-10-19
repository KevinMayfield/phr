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
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {CovalentDataTableModule} from "@covalent/core/data-table";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatList, MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OrdersComponent } from './orders/orders.component';
import {PrescriptionRefillComponent} from './gp-prescriptions/prescription-refill.component';
import {PrescriptionOrderDetailComponent} from './prescription-order-detail/prescription-order-detail.component';
import {CovalentMessageModule} from '@covalent/core/message';
import {PrescriptionOrdersComponent} from './eps-orders/prescription-orders.component';
import {CallbackComponent} from './callback/callback.component';
import {AuthGuard} from './service/auth-guard';
import { LoginComponent } from './login/login.component';
import {CovalentFileModule} from "@covalent/core/file";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GpDiaryComponent} from "./gp-diary/gp-diary.component";
import {CovalentDialogsModule} from "@covalent/core/dialogs";
import {MatDialogModule} from '@angular/material/dialog';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { TrackingComponent } from './tracking/tracking.component';
import {CovalentFlavoredMarkdownModule} from '@covalent/flavored-markdown';
import { MedicationsComponent } from './medications/medications.component';
import {CovalentMediaModule} from "@covalent/core/media";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrdersComponent,
      PrescriptionRefillComponent,
      PrescriptionOrdersComponent,
      GpDiaryComponent,
      CallbackComponent,
      LoginComponent,
      PrescriptionOrderDetailComponent,
      DiaryEntryComponent,
      TrackingComponent,
      MedicationsComponent
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
        CovalentDialogsModule,
        CovalentFlavoredMarkdownModule,
        CovalentMediaModule,

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
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSortModule

    ],
    entryComponents: [
        PrescriptionOrderDetailComponent
    ],
  providers: [
      AuthGuard,
      {provide: MAT_DATE_LOCALE
          , useValue: 'en-GB'},

  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
    // nothing
}