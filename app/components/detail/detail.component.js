(function () {

    'use strict';

    function DetailController(todoService, $stateParams) {

        var vm = this;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.todoId = parseInt($stateParams.id);
            todoService.getById(vm.todoId).then(function(result) {
                vm.todo = result.data;
            })
        }


    }

    DetailController.$inject = ['todoService', '$stateParams'];

    angular.module('todoApp')
        .component('detail', {
            controller: DetailController,
            templateUrl: './components/detail/detail.template.html'
        });

}());
