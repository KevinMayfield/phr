import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FhirService} from '../service/FhirService';
import {MedicationRequest} from 'fhir/r4';
import {DatePipe} from '@angular/common';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PrescriptionOrderDetailComponent} from "../prescription-order-detail/prescription-order-detail.component";
import {RefillComponent} from "../refill/refill.component";
import {TdDialogService, TdPromptDialogComponent} from "@covalent/core/dialogs";

@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.scss']
})
export class PrescriptionRefillComponent implements OnInit {



    displayedColumns: string[] = ['authored', 'status', 'name',  'courseOfTherapy',  'quantity', 'unit', 'reorder_medication'];

    dataSource: any;

    data: MedicationRequest[] =  [];

    datepipe: DatePipe = new DatePipe('en-GB');


  constructor(private fhir: FhirService,
              private dialog: MatDialog,
              private _dialogService: TdDialogService) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
      this.fhir.queryMedicationRequests();
      this.fhir.medicationChange.subscribe(() => {
         this.dataSource = new MatTableDataSource(this.fhir.getMedicationRequests());
      });
  }
  refill(resource: any): void {

      const matDialogRef = this._dialogService.openPrompt({
          title: 'Re-Order (FHIR Task)',
          message: 'Why do you wish to re-order ' + resource?.medicationCodeableConcept?.coding[0].display,
          value: '',
          cancelButton: 'Cancel',
          acceptButton: 'Ok',
      });
      matDialogRef.afterClosed().subscribe(result => {
          console.log(matDialogRef.componentInstance.value);
      });
  }

}
