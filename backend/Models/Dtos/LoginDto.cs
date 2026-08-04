// Models/Dtos/LoginDto.cs
namespace CoffeeCrm.Api.Models.Dtos
{
    public class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}