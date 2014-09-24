/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='libs/requirejs/requirejs.d.ts' />
/// <reference path='app.ts' />
/// <reference path='controllers/myctrl2.ts' />

declare var _: any;
declare module "underscore" {
  export = _;
}

// TypeScript declarations useful for importing angular modules
declare module 'angular' {
    var angular: ng.IAngularStatic;
    export = angular;
}
declare module 'angularRoute' {
}
declare module 'angular-resource' {
}
declare module 'angular-ui-bootstrap' {
}