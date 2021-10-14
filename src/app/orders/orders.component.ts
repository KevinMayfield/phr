import {Component, EventEmitter, OnInit} from '@angular/core';
import {Bundle, OperationOutcome} from 'fhir/r4';
import {NhsdService} from '../service/nhsd.service';
import {MatDialog} from "@angular/material/dialog";
import {TdDialogService} from "@covalent/core/dialogs";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  files: File | FileList | undefined;
  disabled = false;

  constructor(
      private nhsd: NhsdService,
      private dialog: MatDialog,
      private _dialogService: TdDialogService
  ) { }

  ngOnInit(): void {
    this.nhsd.error.subscribe(
        (error: OperationOutcome) => {
          console.log(error);
           const operationOutcome = error as OperationOutcome;
           console.log(operationOutcome.issue[0].details?.text);
          // @ts-ignore
            const msg :string = operationOutcome.issue[0].details?.text;
          // @ts-ignore
            const matDialogRef = this._dialogService.openAlert({
            title: 'Error',
            message: msg
          });
          matDialogRef.afterClosed().subscribe(result => {
            //console.log(matDialogRef.componentInstance.value);
          });
        }
    )
  }

  // https://stackoverflow.com/questions/40214772/file-upload-in-angular

  selectEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      console.log('is filelist');
    } else if (files instanceof File) {
      console.log('is file');
      const file: File = files;
      const fileReader: FileReader = new FileReader();
      // tslint:disable-next-line:only-arrow-functions typedef
      fileReader.onloadend = (e) => {
        if (typeof fileReader.result === 'string') {
          const bundle = JSON.parse(fileReader.result) as Bundle;
          this.nhsd.convertToTransaction(bundle);
        }
      };
      fileReader.readAsText(file);
    } else {
      console.log('not a file type');
    }
  }


}
