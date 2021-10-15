export const environment = {
  production: true,
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
