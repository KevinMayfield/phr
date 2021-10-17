import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  @Output() closed: EventEmitter<void> = new EventEmitter();

  basicFlavoredMarkdown: string = `
   ## GP FHIR MedicationRequests

   Some GP suppliers have patient facing services with the concept of tracking. This is centred around the FP10 and includes:
   - Patient asking for a refill
   - GP authorizing refill
   - Patient is informed the FP10 is ready for collection.
   
   ## Pharmacy FHIR MedicationDispense
   
   This is centred around the delivery of the medication and includes:
   - medication is ready for collection
   - medication has been dispatched.
   
   ## Notes
   
   In both cases these medication fulfilment tasks appear to be decoupled from the clinical medicinal FHIR resources. 
   
   They are seperate atomic actions.
 `;

  constructor() { }

  ngOnInit(): void {
  }
  ok(event: any): void {
      this.closed.emit();
  }

}
