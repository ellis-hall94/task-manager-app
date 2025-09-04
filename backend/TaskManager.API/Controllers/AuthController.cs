using Microsoft.AspNetCore.Mvc;
using TaskManager.API.Services;
using TaskManager.API.Models;

namespace TaskManager.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            var user = new User
            {
                UserName = registerModel.Username,
            };
            
            var result = await _authService.RegisterAsync(user, registerModel.Password);
            if (result == "Success")
            {
                return Ok(new { Success = true, Message = "Registration successful." });
            }
            return BadRequest(new { Success = false, Message = result });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var result = await _authService.LoginAsync(loginModel.Username, loginModel.Password);
            if (result == "Success")
            {
                return Ok(new { Success = true, Message = "Login successful." });
            }
            return Unauthorized(new { Success = false, Message = result });
        }
    }

    public class RegisterModel
    {
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class LoginModel
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}