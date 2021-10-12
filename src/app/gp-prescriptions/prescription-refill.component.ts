import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FhirService} from '../service/FhirService';
import {MedicationRequest} from 'fhir/r4';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.scss']
})
export class PrescriptionRefillComponent implements OnInit {



    displayedColumns: string[] = ['name', 'authored', 'courseOfTherapy',  'quantity', 'unit', 'reorder_medication'];

    dataSource: any;

    data: MedicationRequest[] =  [];

    datepipe: DatePipe = new DatePipe('en-GB');


  constructor(private fhir: FhirService) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
      this.fhir.queryMedicationRequests();
      this.fhir.medicationChange.subscribe(() => {
         this.dataSource = new MatTableDataSource(this.fhir.getMedicationRequests());
      });
  }

}
