(function () {

    'use strict';
    
    function RegisterController() {

        var vm = this;
        vm.passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\D)[a-zA-Z\d\D]{8,}$/;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.countries = [ { code: 'es', name: 'España'},{ code: 'fr', name: 'Francia'}, { code: 'pt', name: 'Portugal'} ];
        }

        vm.submit = function (valid) {
            alert('registered');
        };
    }

    RegisterController.$inject = [];

    angular.module('todoApp')
        .component('register', {
            controller: RegisterController,
            templateUrl: 'components/register/register.template.html'
        });

}());
