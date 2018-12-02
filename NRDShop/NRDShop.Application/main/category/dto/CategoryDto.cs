using NRDShop.Application.main.products.dto;
using NRDShop.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.category.dto
{
    public class CategoryDto
    {
        public CategoryDto()
        {
           // Products = new HashSet<ProductsDto>();
        }

       // public int Id { get; set; }
        public string Name { get; set; }

        //public ICollection<ProductsDto> Products { get; set; }
    }
}
