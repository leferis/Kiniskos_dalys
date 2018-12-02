using Microsoft.EntityFrameworkCore;
using NRDShop.EF.entites;
using NRDShop.EF.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NRDShop.EF.repositories
{
    public class ProductsRepository : Repository<Products>, IProductsRepository
    {
        public ProductsRepository(NRDShopContext context) : base(context)
        {
        }
        public List<Products> GetAllProducts()
        {
            return NRDShopContext.Products
                //.Where(x => x.CategoryId == x.Category.Id)
                .Include(x => x.pavadinimas)
                .ToList();
        }
        public NRDShopContext NRDShopContext
        {
            get { return Context as NRDShopContext; }
        }
    }
}
