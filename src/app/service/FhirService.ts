import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bundle, BundleEntry, MedicationRequest, Task} from 'fhir/r4';
import {environment} from '../../environments/environment';
import {v4 as uuidv4} from 'uuid';
@Injectable({
    providedIn: 'root'
})
export class FhirService {

    private medicationRequests: MedicationRequest[] = [];


    medicationChange: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient,
                private auth: AuthService) {
    }

    taskChange: EventEmitter<any> = new EventEmitter();
    private tasks: Task[] = [];

    public getTasks(): Task[] {
        return this.tasks;
    }

    public queryTasks(): any {


        const headers = this.getHeaders();
        // tslint:disable-next-line:typedef
        this.http.get(environment.virtually + '/Task?patient=137', { headers}).subscribe(
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


    public getMedicationRequests(): MedicationRequest[] {
        return this.medicationRequests;
    }
    public queryMedicationRequests(): any {

        const headers = this.getHeaders();
        // tslint:disable-next-line:typedef
        this.http.get(environment.virtually + '/MedicationRequest?patient=137&date=2019-01-01', { headers}).subscribe(
            result => {
                const bundle = result as Bundle;
                if (bundle.entry !== undefined && bundle.entry.length > 0) {
                    this.medicationRequests = [];
                    for (const entry of bundle.entry) {
                        this.medicationRequests.push(entry.resource as MedicationRequest);
                    }
                    this.medicationChange.emit({});
                } else {
                    console.log('Medication not found.');
                }
            }
        );
    }

    public postTask(task: Task): void {
        const headers = this.getHeaders();
        const taskUrn = 'urn:uuid:' + uuidv4();
        const bundle: Bundle = {
            type: 'message',
            resourceType: 'Bundle',
            identifier: {
                system: 'https://tools.ietf.org/html/rfc4122',
                value: uuidv4()
            },
            entry: [
                {
                    fullUrl: 'urn:uuid:' + uuidv4(),
                    resource: {
                        resourceType: 'QuestionnaireResponse',
                        extension: [
                            {
                                url: 'http://fhir.virtuallyhealthcare.co.uk/Location',
                                valueReference: {
                                    reference: 'Location/4884'
                                }
                            },
                            {
                                url: 'http://fhir.virtuallyhealthcare.co.uk/LocationType',
                                extension: [
                                    {
                                        url: 'ID',
                                        valueString: '1672871000006114'
                                    },
                                    {
                                        url: 'GUID',
                                        valueString: '357EFD4F-7912-DE6E-13B8-D3FACED28522'
                                    },
                                    {
                                        url: 'Name',
                                        valueString: 'G.P.Surgery'
                                    }
                                ]
                            }
                        ],
                        identifier: {
                            system: 'urn:uuid',
                            value: uuidv4()
                        },
                        status: 'completed',
                        subject: {
                            reference: 'Patient/137'
                        },
                        encounter: {
                            display: 'Patient Facing Application'
                        },
                        authored: new Date().toISOString(),
                        author: {
                            reference: 'Practitioner/4620'
                        },
                        item: [
                            {
                                linkId: 'task',
                                item: [
                                    {
                                        linkId: 'task-type',
                                        text: 'Task',
                                        answer: [
                                            {
                                                valueReference: {
                                                    reference: taskUrn
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        };
        const taskEntry: BundleEntry = {
            fullUrl: taskUrn,
            resource: task
        };
        bundle.entry?.push(taskEntry);
        console.log(bundle);
        this.http.post(environment.virtually + '/$process-message', JSON.stringify(bundle), { headers: this.getHeaders() }).subscribe(
            (result) => {
                console.log('done post to virtually');
                console.log(result);
            },
            error => {
                console.log(error.error);
            }
        );
    }

    getHeaders(): HttpHeaders {

        let headers = new HttpHeaders(
        );

        headers = headers.append('Content-Type', 'application/fhir+json');
        headers = headers.append('Accept', 'application/fhir+json');
        // headers = headers.append("Authorization", "Bearer "+this.auth.getAccessToken());
        return headers;
    }
}
