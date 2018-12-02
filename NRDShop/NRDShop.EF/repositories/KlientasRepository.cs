using Microsoft.EntityFrameworkCore;
using NRDShop.EF.entites;
using NRDShop.EF.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NRDShop.EF.repositories
{
  public class KlientasRepository : Repository<Klientas>, IIKlientasRepository
  {
    public KlientasRepository(NRDShopContext context) : base(context)
    {
    }
    public List<Klientas> GetAllKlientai()
    {
      return NRDShopContext.Klientas
          //.Where(x => x.CategoryId == x.Category.Id)aWWW D 
          .Include(x => x.id)
          .ToList();
    }
    public NRDShopContext NRDShopContext
    {
      get { return Context as NRDShopContext; }
    }
  }
}
