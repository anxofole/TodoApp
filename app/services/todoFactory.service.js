(function (){
    'use strict';

    function TodoService ($http) {

        var currentId = 0;

        var baseUrl = 'http://localhost:51228/';
        var Todo = function (text) {
            this.text = text;
            this.done = false;
            this.id = currentId++;
        };

        function getAll() {
            return $http({
                method: 'GET',
                url: baseUrl + 'api/todos',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        function getById(todoId) {
            return $http({
                method: 'GET',
                url: baseUrl + 'api/todos/' + todoId,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        function add(newTodoText){
            var newTodo = new Todo(newTodoText);
            return $http({
                method: 'POST',
                url: baseUrl + 'api/todos',
                data: newTodo,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        function switchDone(todo) {

            return $http({
                method: 'PUT',
                url: baseUrl + 'api/todos/' + todo.id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        function removeDoneTodos() {

            return $http({
                method: 'POST',
                url: baseUrl + 'api/todos/removedone',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return {
            add: add,
            getAll: getAll,
            getById: getById,
            switchDone: switchDone,
            removeDoneTodos: removeDoneTodos
        }

    }

    TodoService.$inject = ['$http'];

    angular
        .module('todoApp')
        .factory('todoService', TodoService);

})();