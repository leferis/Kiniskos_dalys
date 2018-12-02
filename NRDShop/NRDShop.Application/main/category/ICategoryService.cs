using NRDShop.Application.main.category.dto;
using System.Collections.Generic;

namespace NRDShop.Application.main.category
{
    public interface ICategoryService
    {
        List<CategoryDto> GetCategory();
    }
}