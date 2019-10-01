(function (){
    'use strict';

    function TodoService () {

        var todos = [];
        var currentId = 0;

        var Todo = function (text) {
            this.text = text;
            this.done = false;
            this.id = currentId++;
        };

        function getAll() {
            return todos;
        }

        function add(newTodoText){
            var newTodo = new Todo(newTodoText);
            todos.push(newTodo);
        }

        function removeDoneTodos() {

            for (var i = todos.length - 1 ; i >= 0; i--) {
                if (todos[i].done) {
                    todos.splice(i, 1);
                }
            }
        }

        function getById(id){
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].id === id) {
                    return todos[i];
                }
            }

            return null;
        }

        return {
            add: add,
            getAll: getAll,
            removeDoneTodos: removeDoneTodos,
            getById: getById
        }

    }

    angular
        .module('todoApp')
        .factory('todoService', TodoService);

})();