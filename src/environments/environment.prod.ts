export const environment = {
  production: true,
  oauth2 : {
    token : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/token',
    auth : 'https://int.api.service.nhs.uk/oauth2-no-smartcard/authorize',
    cookie_domain : 'localhost',
    logonUrl: 'http://localhost:4200/ccri-logon'
  },
  virtually: 'https://emis-api-lb-test-294292503.eu-west-2.elb.amazonaws.com/R4',
  nhsd: 'https://server.fire.ly/r4',
  hapibase: 'http://hapi.fhir.org/baseR4',
  firelybase : 'https://server.fire.ly/r4'

};
