(function (){
    'use strict';

    function TodoService () {

        var todos = [];

        var Todo = function (text) {
            this.text = text;
            this.done = false;
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

        return {
            add: add,
            getAll: getAll,
            removeDoneTodos: removeDoneTodos
        }

    }


    angular
        .module('todoApp')
        .factory('todoService', TodoService);

})();