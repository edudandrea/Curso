namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        void  Add<T> (T entity) where T: class;
        void  Update<T> (T entity) where T: class;
        void  Delete<T> (T entity) where T: class;
        void  DelteRange<T> (T[] entity) where T: class;

        Task<bool> SabeChangesAsync();

    }
}