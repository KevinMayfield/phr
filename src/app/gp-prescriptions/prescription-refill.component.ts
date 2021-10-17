import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FhirService} from '../service/FhirService';
import {MedicationRequest, Task} from 'fhir/r4';
import {DatePipe} from '@angular/common';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
    IDraggableRefs,
    ResizableDraggableDialog,
    TdDialogService,
    TdPromptDialogComponent
} from "@covalent/core/dialogs";
import {DiaryEntryComponent} from "../diary-entry/diary-entry.component";

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
  refill(resource: MedicationRequest): void {

      const task: Task = {
          status: 'ready',
          intent: 'proposal',
          resourceType: 'Task',
          reasonCode: {
              coding: [{
                  code: '103742009'
              }]
          }
      };
      if (resource.medicationCodeableConcept !== undefined
          && resource.medicationCodeableConcept.coding !== undefined
          && resource.medicationCodeableConcept.coding[0].display !== undefined) {
          // @ts-ignore
          task.note = [
              {
                  text: resource.medicationCodeableConcept.coding[0].display
                      + ' ('+  this.datepipe.transform(resource.authoredOn, 'dd MMM yyyy') +  ')'
              }
          ]
      }

      const {
          matDialogRef,
          dragRefSubject,
      }: IDraggableRefs<DiaryEntryComponent> = this._dialogService.openDraggable({
          component: DiaryEntryComponent,
          dragHandleSelectors: ['mat-toolbar'],
          config: {
              panelClass: ['td-window-dialog'], // pass this class in to ensure certain css is properly added,
              data : task
          },
      });

      matDialogRef.componentInstance.closed.subscribe(() => matDialogRef.close());
  }

}
