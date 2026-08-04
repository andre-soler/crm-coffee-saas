// Data/CoffeeCrmDbContext.cs
using Microsoft.EntityFrameworkCore;
using CoffeeCrm.Api.Models.Entities;

namespace CoffeeCrm.Api.Data
{
    public class CoffeeCrmDbContext : DbContext
    {
        public CoffeeCrmDbContext(DbContextOptions<CoffeeCrmDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}