(function () {
    'use strict';
    
    function TodoCtrl() {

        var vm = this;

        var Todo = function (text) {
            this.text = text;
            this.done = false;
        };

        vm.newTodoText = '';
        vm.remaining = 0;
        vm.todos = [];

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

    angular
    .module('todoApp')
    .controller('TodoCtrl', TodoCtrl);

})();