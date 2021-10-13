import {Component, EventEmitter, OnInit} from '@angular/core';
import {Bundle} from "fhir/r4";
import {NhsdService} from "../service/nhsd.service";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  files: File | FileList | undefined;
  disabled = false;

  constructor(
      private hapi: NhsdService
  ) { }

  ngOnInit(): void {
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
          this.hapi.convertToTransaction(bundle);
        }
      };
      fileReader.readAsText(file);
    } else {
      console.log('not a file type');
    }
  }


}
