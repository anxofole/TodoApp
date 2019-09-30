(function () {
    'use strict';

    (function () {
      'use strict';
  
      function routingConfiguration($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
      };
  
      routingConfiguration.$inject = ['$locationProvider', '$routeProvider'];
  
      angular
      .module('todoApp', [
        'ngRoute'
      ]).
      config(routingConfiguration);
  
  })();

})();