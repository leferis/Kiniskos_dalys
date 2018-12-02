using AutoMapper;
using NRDShop.Application.main.products.dto;
using NRDShop.EF.entities;
using NRDShop.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.products
{
    public class ProductsService : IProductsService
    {
        protected readonly IProductsRepository _productsRepository;
        protected readonly IMapper _mapper;
        public ProductsService(IProductsRepository productsRepository, IMapper mapper)
        {
            _productsRepository = productsRepository;
            _mapper = mapper;
        }

        public IEnumerable<ProductsDto> GetAllProducts()
        {
            var list = _productsRepository.GetAllProducts();
            var listDto = _mapper.Map<List<ProductsDto>>(list);
            return listDto;
        }
    }
}
