// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oauth2 : {
    token : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/token',
    auth : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/authorize',
    client_id : 'GuaLlFA7m8myuJ66DX2MFVkFg6ttW6OO',
    client_secret : 'pwNp4KPAxAytk5An',
    cookie_domain : 'localhost',
    logonUrl: 'http://localhost:4200/ccri-logon'
  },
  virtually: 'https://emis-api-lb-test-294292503.eu-west-2.elb.amazonaws.com/R4'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
