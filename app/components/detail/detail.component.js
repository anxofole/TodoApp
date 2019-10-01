(function () {

    'use strict';

    function DetailController(todoService, $stateParams) {

        var vm = this;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.todoId = parseInt($stateParams.id);
            vm.todo = todoService.getById(vm.todoId);
        }


    }

    DetailController.$inject = ['todoService', '$stateParams'];

    angular.module('todoApp')
        .component('detail', {
            controller: DetailController,
            templateUrl: './components/detail/detail.template.html'
        });

}());
