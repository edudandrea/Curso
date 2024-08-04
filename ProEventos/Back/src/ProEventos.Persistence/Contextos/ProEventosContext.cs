using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Domain.Models;


namespace ProEventos.Persistence.Contextos
{
    public class ProEventosContext : DbContext
    {

        public ProEventosContext(DbContextOptions<ProEventosContext> options): base(options){}
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<RedeSocial> RedesSociais { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<PalestranteEvento>()
            .HasKey(PE => new {PE.EventoId, PE.PalestranteID});

            modelBuilder.Entity<Evento>().HasMany(e => e.RedesSociais).WithOne(rs => rs.Eventos).OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Palestrante>().HasMany(e => e.RedesSociais).WithOne(rs => rs.Palestrantes).OnDelete(DeleteBehavior.Cascade);
        }
    }
}