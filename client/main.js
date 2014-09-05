'use strict';


//
// Logging several application phases
//
console.info('Starting main.js...');


//
// RequireJS Configuration
//
requirejs.config({
    basePath: '/',
    paths:    {
        'jquery':            'lib/jquery/dist/jquery',
        'lodash':            'lib/lodash/dist/lodash',
        'angular':           'lib/angular/angular',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls',
        'angular-route':     'lib/angular-route/angular-route',
        'bootstrap-js':      'lib/bootstrap-sass-official/assets/javascripts/bootstrap'
    },
    shim:     {
        'angular':           { exports: 'angular', deps: ['jquery'] },
        'jquery':            { exports: '$' },
        'lodash':            { exports: '_' },
        'angular-bootstrap': ['angular'],
        'angular-route':     ['angular'],
        'bootstrap-js':      ['jquery']
    },
    map:      {
        '*': {
            'css':      'lib/require-css/css',
            'domReady': 'lib/requirejs-domready/domReady'}
    }
});


//
// Monkey patch Require.js to log every module load to the console
//
//var oldReqLoad = requirejs.load;
//function reqLogLoad(context, moduleName, url) {
//	console.log("Loading:", moduleName);
//	return oldReqLoad(context, moduleName, url);
//}
//requirejs.load = reqLogLoad;


//
// Bootstrap AngularJS
//
console.info('Bootstrapping Angular...');
require(['site/bootstrap'], function () {
    console.info('Angular bootstrapped.');
});
