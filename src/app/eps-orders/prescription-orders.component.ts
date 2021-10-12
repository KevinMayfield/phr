import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HapiService} from '../service/hapi.service';
import {Task} from 'fhir/r4';
import {DatePipe} from "@angular/common";

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


  constructor(private hapi: HapiService) { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
     this.hapi.queryTasks();
     this.hapi.taskChange.subscribe(() => {
          this.dataSource = new MatTableDataSource(this.hapi.getTasks());
      });
  }

}
