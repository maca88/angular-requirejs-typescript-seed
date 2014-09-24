/// <reference path='all.ts' />

import angular = require('angular');

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var module = angular.module('myApp.services', [])
    .value('version', '0.1');
    
   
    
export = module;