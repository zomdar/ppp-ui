// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  guestToken: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDU1ZTRiMDQ0YjZmYWM4MmNjNDdhNCIsImlhdCI6MTU5NDE4NzMzOSwiZXhwIjoxNjAyODI3MzM5fQ.GiWnqikVjsNrzujuH_jV9g7omk6244kysD-Ex2P0KTs"
  },
  dbUrl: {
    url: "http://localhost:3000/"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
