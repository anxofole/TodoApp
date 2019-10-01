using System.Collections.Generic;
using System.Linq;

namespace TodosAPI.Models
{
    public static class TodoInMemoryRepository
    {
        private static int counter = 1;
        private static List<Todo> todos = new List<Todo>();

        public static IEnumerable<Todo> GetAll()
        {
            return todos;
        }

        public static Todo GetById(int id)
        {
            return todos.FirstOrDefault(t => t.Id == id);
        }

        public static Todo Add(Todo todo)
        {
            todo.Id = counter++;
            todos.Add(todo);
            return todo;
        }


        public static void DeleteDone()
        {
            todos = todos.Where(t => t.Done == false).ToList();
        }

        public static void SwitchDone(int id)
        {
            var todo = todos.FirstOrDefault(t => t.Id == id);

            todo.Done = !todo.Done;
        }
    }
}