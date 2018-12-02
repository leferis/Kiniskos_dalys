using System.Collections.Generic;

namespace NRDShop.EF.repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetCategory();
    }
}