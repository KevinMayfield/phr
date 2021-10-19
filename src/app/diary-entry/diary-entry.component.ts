import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {TdDialogService} from '@covalent/core/dialogs';
import {DOCUMENT} from '@angular/common';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicFormsComponent,
  TdDynamicType
} from '@covalent/dynamic-forms';
import {Task} from 'fhir/r4';
import {FhirService} from '../service/FhirService';
import { v4 as uuidv4 } from 'uuid';

class DragRef {
}

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss']
})
export class DiaryEntryComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter();

  @ViewChild('diaryForm', { static: true }) diaryForm: TdDynamicFormsComponent | undefined;

  formElements: ITdDynamicElementConfig[] = [

    {
      name: 'valueLabelSelect',
      hint: 'this is a SNOMED concept (procedure codes)',
      label: 'diary/task reason',
      type: TdDynamicElement.Select,
      selections: [
        { label: 'Renewal of prescription', value: '103742009' },
        { label: 'Review of medication', value: '182836005' },
        { label: 'Asthma medication review', value: '394720003' }
      ],
      default : '103742009',
      required: true,
    },
    {
      name: 'description',
      label: 'Notes',
      type: TdDynamicType.Text,
      default: '',
      required: true
    },
    {
      name: 'dateInput',
      label: 'Select a due by date',
      hint: 'this is a datepicker hint',
      type: TdDynamicType.Date,
      default : new Date(),
      required: true,
      min: new Date(2021, 11, 1).setHours(0, 0, 0, 0),
    },
  ];
  constructor(private dialogService: TdDialogService,
              @Inject(DOCUMENT) private document: any,
              @Inject(MAT_DIALOG_DATA) public task: Task,
              private fhir: FhirService) {

  }

  ngOnInit(): void {
    console.log(this.task);
    if (this.task.reasonCode !== undefined && this.task.reasonCode.coding !== undefined) {
      this.formElements[0].default = this.task.reasonCode.coding[0].code;
    }
    if (this.task.note !== undefined ) {
      for (const annotation of this.task.note) {
        this.formElements[1].default += annotation.text + ' ';
      }
    }
  }

  ok(event: any): void {
    if (this.diaryForm !== undefined && this.diaryForm.form.value.dateInput !== undefined) {

      const newTask: Task = {
        resourceType: 'Task',
        status: 'ready',
        identifier: [
          {
            system: 'https://tools.ietf.org/html/rfc4122',
            value: uuidv4()
          }
        ],
        intent: 'order',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/CodeSystem/task-code',
              code: 'fulfill',
              display: 'Fulfill the focal request'
            }
          ]
        },
        for: {
          reference: 'Patient/137'
        },
        requester: {
          reference: 'Practitioner/4620'
        },
        authoredOn: new Date().toISOString(),
      };
      switch (this.diaryForm.form.value.valueLabelSelect) {
        case '103742009':
          newTask.reasonCode = {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '103742009',
              display: 'Renewal of prescription'
            }
          ]
        };
          break;
        case '182836005':
          newTask.reasonCode = {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '182836005',
                display: 'Review of medication'
              }
            ]
          };
          break;
        case '394720003':
          newTask.reasonCode = {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '394720003',
                display: 'Asthma medication review'
              }
            ]
          };
          break;
      }
      if (this.diaryForm.form.value.dateInput !== undefined) {
        const expDate = this.diaryForm.form.value.dateInput;
        console.log(expDate.toISOString());
        newTask.authoredOn = expDate.toISOString();
      }
      newTask.note = [
        {
          text: this.diaryForm.form.value.description
        }
      ];
      console.log(newTask);
      this.fhir.postTask(newTask);
      this.closed.emit();
    }
  }

}
