using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace TaskManager.API.Models
{
    public class User : IdentityUser
    {
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string Role { get; set; } = "User";
    }
}