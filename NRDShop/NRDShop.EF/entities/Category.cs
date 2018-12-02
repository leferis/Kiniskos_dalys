using NRDShop.EF.entities;
using System;
using System.Collections.Generic;

namespace NRDShop.EF
{
    public partial class Category
    {
        public Category()
        {
            Products = new HashSet<Products>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Products> Products { get; set; }
    }
}
