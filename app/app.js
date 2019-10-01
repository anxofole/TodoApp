(function () {
  'use strict';

  function routingConfiguration($locationProvider) {
    $locationProvider.hashPrefix('');
  };

  routingConfiguration.$inject = ['$locationProvider'];

  angular
    .module('todoApp', [
      'ui.router'
    ])
    .config(routingConfiguration)

})();