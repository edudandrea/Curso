using ProEventos.Domain.Models;

namespace ProEventos.Domain
{
    public class RedeSocial
    {
        public int Id { get; set; }

        public string? Nome { get; set; }

        public string? URL { get; set; }

        public int? EventoId { get; set; }

        public Evento? Eventos { get; set; }

        public int? PalestrantesId { get; set; }

        public Palestrante? Palestrantes { get; set; }
    }
}