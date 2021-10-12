import { Injectable } from '@angular/core';
import {Bundle, BundleEntry, DomainResource, Identifier, MedicationRequest, MessageHeader, Task} from 'fhir/r4';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HapiService {

  constructor(private http: HttpClient) { }

  public convertToTransaction(bundle: Bundle): any {

    let newBundle: Bundle = {
      resourceType : 'Bundle',
      type : 'transaction',
      entry : []
    };
    let task: Task = {
      resourceType : 'Task',
      status: 'ready',
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
      input: []
    };
    let prescriptionorder = false;
    if (bundle.entry !== undefined && bundle.entry.length > 0) {
      for (const entry of bundle.entry) {
          const resource = entry.resource as DomainResource;
          if (resource.resourceType === 'Patient') {
              task.for = {
                reference : entry.fullUrl
              };
          }
        if (resource.resourceType === 'MessageHeader' ) {
          console.log('MessageHeader');
          const medicationHeader = resource as MessageHeader;
          if (medicationHeader.eventCoding?.code === 'prescription-order') {
            prescriptionorder = true;
          }
        }
        // tslint:disable-next-line:no-conditional-assignment
          if ((resource.resourceType === 'MedicationRequest') ) {
            const medicationRequest = resource as MedicationRequest;
            if (task.identifier === undefined) {
              task.identifier = [];
              task.identifier.push(medicationRequest.groupIdentifier as Identifier);
            }
            task.requester = medicationRequest.requester;
            if (medicationRequest.dispenseRequest !== undefined && medicationRequest.dispenseRequest.performer !== undefined) {
                task.owner = medicationRequest.dispenseRequest.performer;
            }
            const input = {
              type: {
                coding:  [
                  {
                    system: 'http://snomed.info/sct',
                    code: '16076005',
                    display: 'Prescription'
                  }
                ]
              },
              valueReference: {
                type: 'MedicationRequest',
                reference: entry.fullUrl,
                display: medicationRequest.medicationCodeableConcept.coding[0].display
              }
            };
            task.input?.push(input);
          }
          if (resource.identifier !== undefined) {
              let identifier = '';
              if (resource.identifier.length !== undefined) {
                identifier = resource.identifier[0].system + '|' + resource.identifier[0].value;
              } else {
                identifier = resource.identifier.system + '|' + resource.identifier.value;
              }
              // @ts-ignore
              entry.request = {
                method : 'PUT',
                url: resource?.resourceType + '?identifier=' + identifier
              };
              newBundle.entry?.push(entry);
          } else {
            // remove resource
          }

      }
      console.log(task);
      const entry: BundleEntry = {
        resource : task,
        request : {
          method : 'PUT',
          url: 'Task?identifier=' + task.identifier[0].system + '|' + task.identifier[0].value
        }
      };
      if (prescriptionorder) {
        newBundle.entry?.push(entry);
      }
      console.log(newBundle);
      this.http.post('http://hapi.fhir.org/baseR4', JSON.stringify(newBundle), { headers: this.getHeaders() }).subscribe(
          (result) => {
            console.log('done post to hapi');
            console.log(result);
          }
      );
    } else {
    }
  }
  getHeaders(): HttpHeaders {

    let headers = new HttpHeaders(
    );

    headers = headers.append('Content-Type', 'application/fhir+json');
    headers = headers.append('Accept', 'application/fhir+json');
    return headers;
  }
}
