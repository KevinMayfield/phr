import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {NhsdService} from '../service/nhsd.service';
import {Task} from 'fhir/r4';
import {DatePipe} from "@angular/common";
import {PrescriptionOrderDetailComponent} from "../prescription-order-detail/prescription-order-detail.component";

@Component({
  selector: 'app-prescription-orders',
  templateUrl: './prescription-orders.component.html',
  styleUrls: ['./prescription-orders.component.scss']
})
export class PrescriptionOrdersComponent implements OnInit {


    datepipe: DatePipe = new DatePipe('en-GB');
    displayedColumns: string[] = ['authored', 'status', 'requester', 'pharmacy', 'medications', 'order_number',  'view_order', 'track_order'];

    dataSource: any;
    data: Task[] = [];


  constructor(private hapi: NhsdService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
     this.hapi.queryTasks();
     this.hapi.taskChange.subscribe(() => {
          this.dataSource = new MatTableDataSource(this.hapi.getTasks());
      });
  }

  view(resource: any): void {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
          id: 1,
          resource: resource
      };
      this.dialog.open( PrescriptionOrderDetailComponent, dialogConfig);
  }

}
