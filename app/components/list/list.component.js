(function () {

    'use strict';

    function ListController() {

        var vm = this;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.newTodoText = '';
            vm.remaining = 0;
            vm.todos = [];
        }

        var Todo = function (text) {
            this.text = text;
            this.done = false;
        };

        vm.addNewTodo = function () {
            var newTodo = new Todo(vm.newTodoText);
            vm.todos.push(newTodo);
            vm.remaining++;
            vm.newTodoText = '';
        };

        vm.removeDoneTodos = function () {
            vm.todos = vm.todos.filter(function (todo) {
                return todo.done !== true;
            });
        };

        vm.updateRemaining = function (todo) {
            if (todo.done) {
                vm.remaining--;
            } else {
                vm.remaining++;
            }
        };

    }

    ListController.$inject = [];

    angular.module('todoApp')
        .component('list', {
            controller: ListController,
            templateUrl: './components/list/list.component.html'
        });

}());
