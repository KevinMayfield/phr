import {Component, Inject, OnInit, ViewContainerRef} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TdDialogService} from "@covalent/core/dialogs";
import {MedicationDispense, MedicationRequest, Task} from 'fhir/r4';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NhsdService} from "../service/nhsd.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-prescription-order-detail',
  templateUrl: './prescription-order-detail.component.html',
  styleUrls: ['./prescription-order-detail.component.scss']
})
export class PrescriptionOrderDetailComponent implements OnInit {


    displayedColumns: string[] = ['authored', 'name', 'dosage', 'quantity', 'unit'];

    displayedDispenseColumns: string[] = ['prepared', 'performer', 'name', 'quantity', 'unit'];

    dataSource : any;
    dispenseDataSource : any;

    datepipe: DatePipe = new DatePipe('en-GB');

    prescription: MedicationRequest[] =  [
    ]

    dispense: MedicationDispense[] =  [

                ]
    closed: any;

  constructor(private _dialogService: TdDialogService,
              private nhsd: NhsdService,
              private _viewContainerRef: ViewContainerRef,
              @Inject(MAT_DIALOG_DATA) public task: any
  ) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<any>(this.prescription);
      this.dispenseDataSource = new MatTableDataSource<any>(this.dispense);

      this.nhsd.medicationRequest.subscribe((medicationRequest: MedicationRequest) => {

          this.prescription.push(medicationRequest);
          this.dataSource = new MatTableDataSource<any>(this.prescription);
      });
      this.nhsd.medicationDispense.subscribe( (medicationDispense: MedicationDispense) => {
          console.log(medicationDispense);
          this.dispense.push(medicationDispense);
          this.dispenseDataSource= new MatTableDataSource<any>(this.dispense);
      })
      const nTask: Task = this.task.resource;
      if (nTask.input !== undefined && nTask.input.length>0) {
          for (const taskInput of nTask.input) {
              if (taskInput.valueReference !== undefined && taskInput.valueReference.reference !== undefined) {
                  console.log(taskInput.valueReference.display)
                  this.nhsd.getMedicationRequest(taskInput.valueReference.reference);
                  this.nhsd.getMedicationDispense(taskInput.valueReference.reference);
              }
          }
      }
  }

}
