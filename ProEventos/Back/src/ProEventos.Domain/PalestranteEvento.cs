namespace ProEventos.Domain
{
    public class PalestranteEvento
    {
        public int PalestranteID { get; set; }

        public PalestranteEvento? Palestrante { get; set; }

        public int EventoId { get; set; }

        public string? Evento { get; set; }
    }
}