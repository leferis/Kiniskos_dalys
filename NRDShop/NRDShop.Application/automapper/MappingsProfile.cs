using NRDShop.Application.main.products.dto;
using NRDShop.EF.entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using NRDShop.EF;
using NRDShop.Application.main.category.dto;
using System.Linq;

namespace NRDShop.Application.automapper
{
    public class MappingsProfile : Profile
    {
        public MappingsProfile()
        {
            //CreateMap<Images, Products>()
            //    .ForMember(dto => dto.Image, opt => opt.MapFrom(x => x.Products.Where(w => w.Image==x.Id).Select(w => w.Image)));
            //CreateMap<Products, Category>()
            //    .ForMember(dto => dto.Id, opt => opt.MapFrom(x => x.CategoryId));
            CreateMap<Products, ProductsDto>()
                .ForMember(dto => dto.pavadinimas, opt => opt.MapFrom(x => x.pavadinimas));
             //   .ForMember(dto => dto.Category, opt => opt.MapFrom(x => x.CategoryId));
            //CreateMap<Category, Products>()
             //   .ForMember(dto => dto.CategoryId, opt => opt.MapFrom(x => x.Id));
            // CreateMap<ProductsDto, Products>()
            //    .ForMember(dto => dto.Category, opt => opt.MapFrom(x => x.Category));
            //CreateMap<Category, Products>()
            //    .ForMember(dto => dto.Category, opt => opt.MapFrom(x => x.Name));
            CreateMap<Category, CategoryDto>();
               // .ForMember(dto => dto.Products, opt => opt.MapFrom(x => x.Products.ToList()));

        }
    }
}
