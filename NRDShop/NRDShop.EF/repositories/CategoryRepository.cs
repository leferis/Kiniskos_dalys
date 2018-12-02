using Microsoft.EntityFrameworkCore;
using NRDShop.EF.entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NRDShop.EF.repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(NRDShopContext context) : base(context)
        {
        }
        public List<Category> GetCategory()
        {
            return NRDShopContext.Category
               // .Include(p => p.Products)
                .ToList();
        }
        public NRDShopContext NRDShopContext
        {
            get { return Context as NRDShopContext; }
        }
    }
}
