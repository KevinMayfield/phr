import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Task} from 'fhir/r4';
import {DatePipe} from "@angular/common";
import {FhirService} from "../service/FhirService";
import {MatDialog} from "@angular/material/dialog";
import {IDraggableRefs, TdDialogService} from "@covalent/core/dialogs";
import {DiaryEntryComponent} from "../diary-entry/diary-entry.component";
import {MatSort} from "@angular/material/sort";

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

    @ViewChild(MatSort) sort: MatSort | undefined;


  constructor(private fhir: FhirService,
              private dialog: MatDialog,
              private _dialogService: TdDialogService
  ) { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
     this.fhir.queryTasks();
     this.fhir.taskChange.subscribe(() => {
         this.data = this.fhir.getTasks();
         this.dataSource = new MatTableDataSource(this.data);
         this.dataSource.sort = this.sort;
      });
  }
  diary(): void {
      const task: Task = {
          status: 'ready',
          intent: 'proposal',
          resourceType: 'Task',
          reasonCode: {
              coding: [{
                  code: '182836005'
              }]
          }
      };

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
