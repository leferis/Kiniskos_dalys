using NRDShop.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.EF.repositories
{
    public interface IIKlientasRepository
    {
 
      List<Klientas> GetAllKlientai();

  }
}
