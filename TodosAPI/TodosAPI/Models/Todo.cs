using System.ComponentModel.DataAnnotations;

namespace TodosAPI.Models
{
    public class Todo
    {
        public int Id { get; set; }

        [Required]
        public string Text { get; set; }

        public bool Done { get; set; }
    }
}