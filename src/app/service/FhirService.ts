import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bundle, MedicationRequest} from 'fhir/r4';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FhirService {
    medicationChange: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient,
                private auth: AuthService) {
    }

    private medicationRequests: MedicationRequest[] = [];
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
                    console.log('Medication found.');
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

    getHeaders(): HttpHeaders {

        let headers = new HttpHeaders(
        );

        headers = headers.append('Content-Type', 'application/fhir+json');
        headers = headers.append('Accept', 'application/fhir+json');
        // headers = headers.append("Authorization", "Bearer "+this.auth.getAccessToken());
        return headers;
    }
}