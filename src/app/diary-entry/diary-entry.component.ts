import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {IDraggableRefs, ResizableDraggableDialog, TdDialogService} from "@covalent/core/dialogs";
import {DOCUMENT} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {ITdDynamicElementConfig, TdDynamicElement, TdDynamicType} from "@covalent/dynamic-forms";

class DragRef {
}

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss']
})
export class DiaryEntryComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter();

  numberElements: ITdDynamicElementConfig[] = [
    {
      name: 'reason',
      label: 'Reason',
      type: TdDynamicType.Text,
      required: true
    }
  ];
  constructor(private _dialogService: TdDialogService,
              @Inject(DOCUMENT) private _document: any,
              @Inject(MAT_DIALOG_DATA) public task: any) {
    console.log(task);
  }

  ngOnInit(): void {
  }


}
