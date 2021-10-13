import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {TdDialogService} from '@covalent/core/dialogs';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.scss']
})
export class RefillComponent implements OnInit {

  constructor(private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
