import {EventEmitter, Injectable} from '@angular/core';
import {
  Bundle,
  BundleEntry,
  DomainResource,
  Identifier,
  MedicationRequest,
  MessageHeader,
  PractitionerRole,
  Task
} from 'fhir/r4';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class HapiService {

  medicationChange: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }


  taskChange: EventEmitter<any> = new EventEmitter();
  private tasks: Task[] = [];
  public getTasks(): Task[] {
    return this.tasks;
  }

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
      let practitionerRole = '';
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
            practitionerRole = medicationRequest.requester?.reference;
            task.authoredOn = medicationRequest.authoredOn;
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
                identifier = this.getIdentifier(resource.identifier[0]);
              } else {
                identifier = this.getIdentifier(resource.identifier);
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
      if (practitionerRole !== '') {
        console.log(practitionerRole);
        for (const entry of bundle.entry) {
          if (entry.fullUrl === practitionerRole) {
            const resource = entry.resource as DomainResource;

            if (resource.resourceType === 'PractitionerRole') {
                task.requester.display = (resource as PractitionerRole).practitioner.display;
                if (task.requester.display === undefined) {
                  task.requester.display = (resource as PractitionerRole).identifier[0].value;
                }
            }
          }
        }
      }
      console.log(task);
      const entry: BundleEntry = {
        resource : task,
        request : {
          method : 'PUT',
          url: 'Task?identifier=' + this.getIdentifier(task.identifier[0])
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
            this.medicationChange.emit({});
          }
      );
    } else {
    }
  }

  public queryTasks(): any {


    const headers = this.getHeaders();
    // tslint:disable-next-line:typedef
    this.http.get(environment.hapi + '/Task?identifier=3C2366-B81001-0A409U,6BC03A-A83008-485BAR,CDF34E-A99968-4FF3BQ', { headers}).subscribe(
        result => {
          const bundle = result as Bundle;
          if (bundle.entry !== undefined && bundle.entry.length > 0) {
            console.log('Task found.');
            this.tasks = [];
            for (const entry of bundle.entry) {
              this.tasks.push(entry.resource as Task);
            }
            this.taskChange.emit({});
          } else {
            console.log('Task not found.');
          }
        }
    );
  }
  getHeaders(): HttpHeaders {

    let headers = new HttpHeaders(
    );

    headers = headers.append('Content-Type', 'application/fhir+json');
    headers = headers.append('Accept', 'application/fhir+json');
    return headers;
  }

  getIdentifier(identifier: Identifier): string {
    if (identifier.system !== undefined) {
      return identifier.system + '|' + identifier.value;
    } else {
      return identifier.value;
    }
  }
}