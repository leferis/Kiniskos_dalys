using NRDShop.Application.main.Klientas.dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.Application.main.Klientas
{
     public interface iKlientasService
    {
    IEnumerable<KlientasDto> GetAllKlientai();
  }
}
