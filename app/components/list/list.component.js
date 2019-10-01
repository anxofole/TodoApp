(function () {

    'use strict';

    function ListController(todoService) {

        var vm = this;

        vm.$onInit = $onInit;

        function $onInit() {
            vm.newTodoText = '';
            vm.remaining = 0;
            vm.todos = [];
            todoService.getAll().then(function(result){
                vm.todos = result.data;
                vm.remaining = 0;
                for (var i = 0; i < vm.todos.length; i++) {
                    if (vm.todos[i].done == false) {
                        vm.remaining++;
                    }
                }
            },
            function() {
                // Show error
            });       
        }


        vm.addNewTodo = function () {
            todoService.add(vm.newTodoText).then(
                function (result) {
                    vm.todos.push(result.data);
                    vm.remaining++;
                    vm.newTodoText = '';
                },
                function() {
                    // Show error
                });
        };

        vm.removeDoneTodos = function () {
            todoService.removeDoneTodos().then(
                function () {
                    vm.todos = vm.todos.filter(function (todo) {
                        return todo.done !== true;
                    });
                },
                function() {
                    // Show error
                });  
        };

        vm.updateRemaining = function (todo) {
            todoService.switchDone(todo).then(
                function(result) {
                    if (todo.done) {
                        vm.remaining--;
                    } else {
                        vm.remaining++;
                    }
                },
                function() {
                    // Show error
                });
        };

    }

    ListController.$inject = ['todoService'];

    angular.module('todoApp')
        .component('list', {
            controller: ListController,
            templateUrl: './components/list/list.template.html'
        });

}());
