import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {TdDialogService} from "@covalent/core/dialogs";
import {DOCUMENT} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicFormsComponent,
  TdDynamicType
} from "@covalent/dynamic-forms";
import {Task} from 'fhir/r4';

class DragRef {
}

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss']
})
export class DiaryEntryComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter();

  @ViewChild('diaryForm', { static: true }) diaryForm: TdDynamicFormsComponent;

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
      required: true
    },
    {
      name: 'dateInput',
      label: 'Select a due by date',
      hint: 'this is a datepicker hint',
      type: TdDynamicType.Date,
      required: true,
      min: new Date(2021, 11, 1).setHours(0, 0, 0, 0),
    },
  ];
  constructor(private _dialogService: TdDialogService,
              @Inject(DOCUMENT) private _document: any,
              @Inject(MAT_DIALOG_DATA) public task: Task) {

  }

  ngOnInit(): void {
    console.log(this.task);
    if (this.task.reasonCode !== undefined && this.task.reasonCode.coding != undefined) {
      this.formElements[0].default = this.task.reasonCode.coding[0].code;
    }
    if (this.task.note !== undefined && this.task.note.length > 0) {
      this.formElements[1].default = this.task.note[0].text;
    }
  }

  ok(event: any): void {
    if (this.diaryForm !== undefined) {
      console.log(this.diaryForm.form.value);
      console.log(this.task);
    }
  }

}
