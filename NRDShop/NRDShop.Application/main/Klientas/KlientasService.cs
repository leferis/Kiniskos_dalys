using AutoMapper;
using NRDShop.Application.main.Klientas.dto;
using NRDShop.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.Klientas
{
    class KlientasService
    {
    public class KlientasService : iKlientasService
    {
      protected readonly iKlientasService _categoryRepository;
      protected readonly IMapper _mapper;
      public KlientasService(ICategoryRepository categoryRepository, IMapper mapper)
      {
        _klientasRepository = klientasRepository;
        _mapper = mapper;
      }
      public List<KlientasDto> GetCategory()
      {
        var list = _categoryRepository.GetAllKlientai();
        var listDto = _mapper.Map<List<KlientasDto>>(list);
        return listDto;
      }
    }
}
