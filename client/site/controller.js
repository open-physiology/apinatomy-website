define(['/site/module.js', 'bootstrap-js'], function (site) {

    site.controller('SiteController', function SiteController($scope) {

        //
        // Attempt to obfuscate the address from spam-bots using AngularJS:
        //
        $scope.mailto1 = 'mailto';
        $scope.mailto2 = 'apinatomy';
        $scope.mailto3 = 'apinatomy';
        $scope.mailto4 = 'org';

    });

});
