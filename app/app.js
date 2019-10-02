(function () {
  'use strict';

  function routingConfiguration($locationProvider) {
    $locationProvider.hashPrefix('');
  };

  function statesConfiguration($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        template: '<list></list>'
      })
      .state('detail', {
        url: '/detail/:id',
        template: '<detail></detail>'
      })
      .state('register', {
        url: '/register',
        template: '<register></register>'
      });

     $urlRouterProvider.otherwise('/list');
  }

  routingConfiguration.$inject = ['$locationProvider'];
  statesConfiguration.$inject = ['$stateProvider','$urlRouterProvider'];

  angular
    .module('todoApp', [
      'ui.router'
    ])
    .config(routingConfiguration)    
    .config(statesConfiguration)

})();