import {Component, Input, OnInit} from '@angular/core';
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
import {TrackingComponent} from "../tracking/tracking.component";
import {NhsdService} from "../service/nhsd.service";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.scss']
})
export class PrescriptionRefillComponent implements OnInit {

    @Input()
    source: string = 'GP';

    displayedColumns: string[] = ['authored', 'status', 'name',  'courseOfTherapy',  'quantity', 'unit', 'reorder_medication', 'track_order'];

    dataSource: any;

    data: MedicationRequest[] =  [];

    datepipe: DatePipe = new DatePipe('en-GB');


  constructor(private fhir: FhirService,
              private nhsd: NhsdService,
              private dialog: MatDialog,
              private _dialogService: TdDialogService) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
      if (this.source == 'GP') {
          this.fhir.queryMedicationRequests();
          this.fhir.medicationChange.subscribe(() => {

              this.dataSource = new MatTableDataSource(this.fhir.getMedicationRequests());
          });
      }
      if (this.source == 'EPS') {
          this.nhsd.getMedicationRequest(environment.nhsd + '/MedicationRequest?patient.identifier=9876543210');
          this.nhsd.medicationRequest.subscribe(() => {

              this.dataSource = new MatTableDataSource(this.nhsd.getMedicationRequests());
          });
      }
  }

  tracking(event: any): void {
      const {
          matDialogRef,
          dragRefSubject,
      }: IDraggableRefs<TrackingComponent> = this._dialogService.openDraggable({
          component: TrackingComponent,
          dragHandleSelectors: ['mat-toolbar'],
          config: {
              panelClass: ['td-window-dialog'], // pass this class in to ensure certain css is properly added,
          },
      });

      matDialogRef.componentInstance.closed.subscribe(() => matDialogRef.close());
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
