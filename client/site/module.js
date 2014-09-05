'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash', 'angular', 'angular-bootstrap', 'angular-route'], function (_, ng) {
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //
    // Define the site module:
    //
	var site = ng.module('site', [ 'ui.bootstrap', 'ngRoute' ]);


    //
	// Global configuration:
	//
	site.config(function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider
            .when('/home', {
                templateUrl: 'home/page.html',
                controller: 'HomeController'
            })
            .when('/development', {
                templateUrl: 'development/page.html',
                controller: 'DevelopmentController'
            })
            .when('/', { redirectTo: '/home' });
	});


    //
	// Register the variables we want to be available in every $scope everywhere.
	//
	site.run(function ($rootScope, $location, $route) {
		$rootScope.constructor.prototype._ = _;
		$rootScope.constructor.prototype.console = console;
		$rootScope.constructor.prototype.Math = Math;
        $rootScope.$route = $route;
	});


	return site;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
