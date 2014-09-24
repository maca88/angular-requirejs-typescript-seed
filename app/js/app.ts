/// <reference path='all.ts' />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="filters"/>
/// <amd-dependency path="services"/>
/// <amd-dependency path="directives"/>
/// <amd-dependency path="controllers"/>
/// <amd-dependency path="angularRoute"/>


var app = angular.module('myApp', [
			'ngRoute',
			'myApp.filters',
			'myApp.services',
			'myApp.directives',
			'myApp.controllers'
		]);
 
export = app;