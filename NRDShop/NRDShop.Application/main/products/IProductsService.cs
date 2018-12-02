using NRDShop.Application.main.products.dto;
using NRDShop.EF.entities;
using System.Collections.Generic;

namespace NRDShop.Application.main.products
{
    public interface IProductsService
    {
        IEnumerable<ProductsDto> GetAllProducts();
    }
}