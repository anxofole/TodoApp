(function () {

    'use strict';

    function ListController(todoService) {

        var vm = this;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.newTodoText = '';
            vm.remaining = 0;
            vm.todos = todoService.getAll();
        }


        vm.addNewTodo = function () {
            todoService.add(vm.newTodoText);
            vm.remaining++;
            vm.newTodoText = '';
        };

        vm.removeDoneTodos = function () {
            todoService.removeDoneTodos();
        };

        vm.updateRemaining = function (todo) {
            if (todo.done) {
                vm.remaining--;
            } else {
                vm.remaining++;
            }
        };

    }

    ListController.$inject = ['todoService'];

    angular.module('todoApp')
        .component('list', {
            controller: ListController,
            templateUrl: './components/list/list.component.html'
        });

}());
