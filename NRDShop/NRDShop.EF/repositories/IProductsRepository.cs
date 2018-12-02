using NRDShop.EF.entities;
using System.Collections.Generic;

namespace NRDShop.EF.repositories
{
    public interface IProductsRepository
    {
        List<Products> GetAllProducts();
    }
}