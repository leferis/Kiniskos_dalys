using AutoMapper;
using NRDShop.Application.main.category.dto;
using NRDShop.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.category
{
    public class CategoryService : ICategoryService
    {
        protected readonly ICategoryRepository _categoryRepository;
        protected readonly IMapper _mapper;
        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }
        public List<CategoryDto> GetCategory()
        {
            var list = _categoryRepository.GetCategory();
            var listDto = _mapper.Map<List<CategoryDto>>(list);
            return listDto;
        }

    }
}
