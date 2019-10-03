(function (){
    'use strict';

    function TodoService () {

        var svc = this;

        svc.todos = [];

        var Todo = function (text) {
            this.text = text;
            this.done = false;
        };

        svc.getAll = function () {
            return svc.todos;
        }

        svc.add = function(newTodoText){
            var newTodo = new Todo(newTodoText);
            svc.todos.push(newTodo);
        }

        svc.removeDoneTodos = function() {
            for (var i = svc.todos.length - 1 ; i >= 0; i--) {
                if (svc.todos[i].done) {
                    svc.todos.splice(i, 1);
                }
            }
        }
    }

    angular
        .module('todoApp')
        .service('todoServiceService', TodoService);

})();