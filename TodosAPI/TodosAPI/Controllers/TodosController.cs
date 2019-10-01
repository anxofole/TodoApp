using System.Web.Http;
using TodosAPI.Models;

namespace TodosAPI.Controllers
{
    [RoutePrefix("api/todos")]
    public class TodosController : ApiController
    {
        // GET: api/Todos
        [Route("")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return this.Ok(TodoInMemoryRepository.GetAll());
        }

        // GET: api/Todos/1        
        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var todo = TodoInMemoryRepository.GetById(id);

            if (todo == null)
            {
                return this.NotFound();
            }

            return this.Ok(todo);
        }

        // POST: api/Todos
        [Route("")]
        [HttpPost]
        public IHttpActionResult AddNew(Models.Todo todo)
        {
            if (ModelState.IsValid)
            {
                var newTodo = TodoInMemoryRepository.Add(todo);
                return this.Ok(newTodo);
            }

            return this.BadRequest(ModelState);
        }

        // PUT: api/Todos/1
        [Route("{id}")]
        [HttpPut]
        public IHttpActionResult SwitchDone(int id)
        {
            if (ModelState.IsValid)
            {
                TodoInMemoryRepository.SwitchDone(id);
                return this.Ok();
            }

            return this.BadRequest(ModelState);
        }

        // POST: api/deletedone
        [Route("removedone")]
        [HttpPost]
        public IHttpActionResult DeleteDone()
        {
            TodoInMemoryRepository.DeleteDone();
            return this.Ok();
        }
    }
}
