using System.ComponentModel.DataAnnotations;

namespace TaskManager.API.Models
{
    public class Project
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;
        
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public List<TaskManager.API.Models.Task> Tasks { get; set; } = new List<TaskManager.API.Models.Task>();
    }
}