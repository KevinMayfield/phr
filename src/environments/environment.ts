// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oauth2 : {
    token : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/token',
    auth : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/authorize',
    cookie_domain : 'localhost',
    logonUrl: 'http://localhost:4200/ccri-logon'
  },
  virtually: 'https://test-emis.virtually.healthcare/R4',
  nhsd: 'https://server.fire.ly/r4',
  hapibase: 'http://hapi.fhir.org/baseR4',
  firelybase : 'https://server.fire.ly/r4'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
