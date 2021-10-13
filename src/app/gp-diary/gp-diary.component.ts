import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Task} from 'fhir/r4';
import {DatePipe} from "@angular/common";
import {FhirService} from "../service/FhirService";
import {MatDialog} from "@angular/material/dialog";
import {TdDialogService} from "@covalent/core/dialogs";

@Component({
  selector: 'app-gp-diary',
  templateUrl: './gp-diary.component.html',
  styleUrls: ['./gp-diary.component.scss']
})
export class GpDiaryComponent implements OnInit {


    datepipe: DatePipe = new DatePipe('en-GB');
    displayedColumns: string[] = ['when', 'status', 'reason', 'notes'];

    dataSource: any;
    data: Task[] = [];


  constructor(private fhir: FhirService,
              private dialog: MatDialog,
              private _dialogService: TdDialogService
  ) { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
     this.fhir.queryTasks();
     this.fhir.taskChange.subscribe(() => {
          this.dataSource = new MatTableDataSource(this.fhir.getTasks());
      });
  }
  diary(): void {
      const matDialogRef = this._dialogService.openPrompt({
          title: 'Diary Entry (FHIR Task)',
          message: 'Use this to add Tasks (Diary Entries) to GP workflow',
          value: 'Asthma Medication Review',
          cancelButton: 'Cancel',
          acceptButton: 'Ok',
      });
      matDialogRef.afterClosed().subscribe(result => {
          console.log(matDialogRef.componentInstance.value);
      });
  }

}
