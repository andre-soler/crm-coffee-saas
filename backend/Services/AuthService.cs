// Services/AuthService.cs
using Microsoft.EntityFrameworkCore;
using CoffeeCrm.Api.Data;
using CoffeeCrm.Api.Models.Entities;
using CoffeeCrm.Api.Models.Dtos;
using CoffeeCrm.Api.Models.Enums;
using Microsoft.AspNetCore.Identity;

namespace CoffeeCrm.Api.Services
{
    public class AuthService
    {
        private readonly CoffeeCrmDbContext _context;
        private readonly PasswordHasher<Usuario> _passwordHasher;

        public AuthService(CoffeeCrmDbContext context)
        {
            _context = context;
            _passwordHasher = new PasswordHasher<Usuario>();
        }

        public async Task<UsuarioRespostaDto> CadastrarAsync(CadastroUsuarioDto dto)
        {
            var usuarioExistente = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == dto.Email);

            if (usuarioExistente != null)
            {
                throw new InvalidOperationException("Já existe um usuário com esse e-mail.");
            }

            var novoUsuario = new Usuario
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Role = Enum.Parse<Role>(dto.Role)
            };

            novoUsuario.SenhaHash = _passwordHasher.HashPassword(novoUsuario, dto.Senha);

            _context.Usuarios.Add(novoUsuario);
            await _context.SaveChangesAsync();

            return new UsuarioRespostaDto
            {
                Id = novoUsuario.Id,
                Nome = novoUsuario.Nome,
                Email = novoUsuario.Email,
                Role = novoUsuario.Role.ToString()
            };
        }

        public async Task<UsuarioRespostaDto?> LoginAsync(string email, string senha)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == email);

            if (usuario == null)
            {
                return null;
            }

            var resultado = _passwordHasher.VerifyHashedPassword(usuario, usuario.SenhaHash, senha);

            if (resultado == PasswordVerificationResult.Failed)
            {
                return null;
            }

            return new UsuarioRespostaDto
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Email = usuario.Email,
                Role = usuario.Role.ToString()
            };
        }
    }
}